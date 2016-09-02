(ns clustermap.component-specs
  (:require [clustermap.formats.time :as time]))

(def max-lag-months 22)

;; tests that latest and previous accounts are not too old
(def current-filter {:nested {:path "?accounts"
                              :filter {:bool {:must [{:term {"rank" 1}}
                                                     {:range {"accounts_date" {:gte (time/format-date (time/months-ago max-lag-months))}}}]}}}})

;; scaleup query : is this a scaleup considering accounts of rank n
;; (1 = latest, 2 = previous, 3 = 2 years prior etc)
(defn scaleup-rank-filter
  [n]
  {:bool {:must [{:nested {:path "?accounts"
                           :filter {:bool {:must [{:term {"rank" n}}
                                                  {:range {"accounts_date" {:gte (time/format-date (time/months-ago (+ max-lag-months (* 12 (dec n)))))}}}
                                                  {:range {"turnover_delta_norm" {:gte 0.2}}}]}}}}
                 {:nested {:path "?accounts"
                           :filter {:bool {:must [{:term {"rank" (inc n)}}
                                                  {:range {"accounts_date" {:gte (time/format-date (time/months-ago (+ max-lag-months (* 12 n))))}}}
                                                  {:range {"turnover_delta_norm" {:gte 0.2}}}
                                                  {:range {"employee_count" {:gte 10}}}
                                                  {:range {"turnover" {:gte 1000000}}}]}}}}]}})
;; is this currently a scale-up
(def scaleup-filter
  (scaleup-rank-filter 1))

;; was this a scaleup a year previously
(def previous-scaleup-filter
  (scaleup-rank-filter 2))

(def component-specs
  [{:id :uk_region
    :type :tag-checkboxes
    :label "Region"
    :sorted true
    :visible true
    :controls true
    :tag-type "nuts_1"
    :tags [{:value "nuts_1__UKH" :label "Eastern"}
           {:value "nuts_1__UKF" :label "East Midlands"}
           {:value "nuts_1__UKG" :label "West Midlands"}
           {:value "nuts_1__UKC" :label "North East"}
           {:value "nuts_1__UKD" :label "North West"}
           {:value "nuts_1__UKI" :label "London"}
           {:value "nuts_1__UKL" :label "Wales"}
           {:value "nuts_1__UKM" :label "Scotland"}
           {:value "nuts_1__UKN" :label "Northern Ireland"}
           {:value "nuts_1__UKE" :label "Yorkshire and the Humber"}
           {:value "nuts_1__UKJ" :label "South East"}
           {:value "nuts_1__UKK" :label "South West"}]}
   #_
   {:id :sector
    :type :tag-checkboxes
    :label "Sector"
    :sorted true
    :visible true
    :controls true
    :tag-type "l4_sector"
    :tags [
           {:value "pharm_manf" :label "Pharmaceutical manufacture"}
           {:value "med_opt_equip_manf" :label "Medical (exc. pharmaceutical) & optical equipment manufacture"}
           {:value "biotech_randd" :label "Biotechnology research and development"}
           {:value "healthcare" :label "Healthcare"}
           ]}

   {:id :sector
    :type :checkboxes
    :label "Sector"
    :visible true
    :sorted true
    :controls true
    :options [;; {:value "any" :label "Any" :filter nil :omit-description true}
              #_{:value "any" :label "Has SIC"
                 :filter {:range {"!sic07" {:gte ""}}}}
              {:value "sectionA" :label "Agriculture, forestry & fishing"
               :filter {:range {"!sic07" {:gte "01110" :lt "05101"}}}}
              {:value "sectionB" :label "Mining & quarrying"
               :filter {:range {"!sic07" {:gte "05101" :lt "10110"}}}}
              {:value "sectionC" :label "Manufacturing"
               :filter {:range {"!sic07" {:gte "10110" :lt "35110"}}}}
              {:value "sectionD" :label "Electricity, gas & air conditioning"
               :filter {:range {"!sic07" {:gte "35110" :lt "36000"}}}}
              {:value "sectionE" :label "Water, sewage & waste"
               :filter {:range {"!sic07" {:gte "36000" :lt "41100"}}}}
              {:value "sectionF" :label "Construction"
               :filter {:range {"!sic07" {:gte "41100" :lt "45111"}}}}
              {:value "sectionG" :label "Wholesale, retail & automative repair	"
               :filter {:range {"!sic07" {:gte "45111" :lt "49100"}}}}
              {:value "sectionH" :label "Transportation and storage"
               :filter {:range {"!sic07" {:gte "49100" :lt "55100"}}}}
              {:value "sectionI" :label "Accommodation, food & drink"
               :filter {:range {"!sic07" {:gte "55100" :lt "58110"}}}}
              #_{:value "sectionJ" :label "Information and communication"
                 :filter {:range {"!sic07" {:gte "58110" :lt "64110"}}}}
              {:value "sectionJ1" :label "Publishing & Broadcasting"
               :filter {:range {"!sic07" {:gte "58110" :lt "61100"}}}}
              {:value "sectionJ2" :label "Telecommunications"
               :filter {:range {"!sic07" {:gte "61100" :lt "62000"}}}}
              {:value "sectionJ3" :label "IT: Software development"
               :filter {:range {"!sic07" {:gte "62000" :lt "63120"}}}}
              {:value "sectionJ4" :label "IT: Web & information services"
               :filter {:range {"!sic07" {:gte "63120" :lt "64000"}}}}
              {:value "sectionK" :label "Financial & insurance"
               :filter {:range {"!sic07" {:gte "64110" :lt "68100" }}}}
              {:value "sectionL" :label "Real estate"
               :filter {:range {"!sic07" {:gte "68100" :lt "69101"}}}}
              {:value "sectionM" :label "Scientific & technical services"
               :filter {:range {"!sic07" {:gte "69101" :lt "77110"}}}}
              {:value "sectionN" :label "Administrative & support services"
               :filter {:range {"!sic07" {:gte "77110" :lt "84110"}}}}
              {:value "sectionO" :label "Government & defence"
               :filter {:range {"!sic07" {:gte "84110" :lt "85100"}}}}
              {:value "sectionP" :label "Education"
               :filter {:range {"!sic07" {:gte "85100" :lt "86101"}}}}
              {:value "sectionQ" :label "Health & social work"
               :filter {:range {"!sic07" {:gte "86101" :lt "90010"}}}}
              {:value "sectionR" :label "Arts & entertainment"
               :filter {:range {"!sic07" {:gte "90010" :lt "94110"}}}}
              {:value "sectionS" :label "Other services"
               :filter {:range {"!sic07" {:gte "94110" :lt "97000"}}}}
              {:value "sectionT" :label "Household activities"
               :filter {:range {"!sic07" {:gte "97000" :lt "99000" }}}}
              {:value "sectionU" :label "International organisations"
               :filter {:range {"!sic07" {:gte "99000"}}}}
              ]}

   {:id :highgrowth
    :type :checkboxes
    :label "High growth"
    :visible true
    :options [{:value "latest" :label "High growth companies" :filter scaleup-filter}
              ]}

   {:id :segments
    :type :tag-checkboxes
    :label "Segments"
    :sorted true
    :visible false
    :controls true
    :tag-type "bis_l1p1_sector"
    :tags [{:value "IBA" :label "Bio fuels"}
           {:value "IBB" :label "Environmental"}
           {:value "IBC" :label "Food/Drink"}
           {:value "IBD" :label "Commodity Chemicals"}
           {:value "IBE" :label "Fine & Speciality Chemicals"}
           {:value "IBF" :label "Pharmaceutical Intermediaries"}
           {:value "IBG" :label "Personal Care/ Cosmetics"}
           {:value "IBH" :label "Specialist Services"}
           {:value "IBI" :label "Agro-Industry"}
           {:value "IBX" :label "Specialist Services"}
           {:value "MBA" :label "Antibodies"}
           {:value "MBB" :label "Therapeutic Proteins"}
           {:value "MBC" :label "Advanced Therapy Medicinal Products (ATMPs)"}
           {:value "MBD" :label "Vaccines"}
           {:value "MBE" :label "Small Molecules"}
           {:value "MBF" :label "Blood & Tissue Products"}
           {:value "MBG" :label "Specialist Services"}
           {:value "MBX" :label "Specialist Suppliers/Supply Chain"}
           {:value "MBZ" :label "Medical Biotechnology - Unclassified "}
           {:value "MTA" :label "Wound Care and Management "}
           {:value "MTB" :label "In vitro diagnostic technology"}
           {:value "MTC" :label "Radiotherapy equipment"}
           {:value "MTD" :label "Medical Imaging/Ultrasound Equipment and Materials"}
           {:value "MTE" :label "Anaesthetic and respiratory technology"}
           {:value "MTF" :label "Orthopaedic Devices"}
           {:value "MTG" :label "Cardiovascular and vascular devices"}
           {:value "MTH" :label "Neurology"}
           {:value "MTI" :label "Ophthalmic Devices/Equipment"}
           {:value "MTJ" :label "Dental and maxillofacial technology"}
           {:value "MTK" :label "Drug Delivery"}
           {:value "MTL" :label "Infection Control "}
           {:value "MTM" :label "Surgical Instruments (reusable) n.e.c."}
           {:value "MTN" :label "Single use technology n.e.c."}
           {:value "MTO" :label "Re-usable diagnostic or analytic equipment n.e.c."}
           {:value "MTP" :label "Implantable devices n.e.c."}
           {:value "MTQ" :label "Assistive Technology"}
           {:value "MTR" :label "Mobility Access"}
           {:value "MTS" :label "Hospital hardware including ambulatory"}
           {:value "MTT" :label "Digital Health"}
           {:value "MTU" :label "Professional services, Consultancy"}
           {:value "MTV" :label "Education and Training"}
           {:value "MTX" :label "Specialist Suppliers/Supply Chain"}
           {:value "MTZ" :label "Medical Technology - Unclassified "}
           {:value "PHA" :label "Antibodies"}
           {:value "PHB" :label "Therapeutic Proteins"}
           {:value "PHC" :label "Advanced Therapy Medicinal Products (ATMPs)"}
           {:value "PHD" :label "Vaccines"}
           {:value "PHE" :label "Small Molecules"}
           {:value "PHF" :label "Blood & Tissue Products"}
           {:value "PHG" :label "Specialist Services"}
           {:value "PHX" :label "Specialist Services"}
           {:value "PHZ" :label "Pharmaceutical - Unclassified"}
           {:value "no_data" :label "No data"}
           ]}
   ])
