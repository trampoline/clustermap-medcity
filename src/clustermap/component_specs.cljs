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

   {:id :sector
    :type :checkboxes
    :label "Sector"
    :visible true
    :sorted true
    :controls true
    :options [;; {:value "any" :label "Any" :filter nil :omit-description true}
              #_{:value "any" :label "Has SIC"
                 :filter {:range {"!sic07" {:gte ""}}}}
              {:value "sectionA" :label "Basic Materials - Chemicals"
               :filter {:bool {:should {:term {"!sic07" "2740a78ea9b47720c082"}}}}}
              {:value "sectionB" :label "Basic Materials - Forestry & Paper"
               :filter {:bool {:should {:term {"!sic07" "a6797d45795f0df54dbf"}}}}}
              {:value "sectionC" :label "Basic Materials - Industrial Metals & Mining"
               :filter {:bool {:should {:term {"!sic07" "1f784fd66e16e14866d4"}}}}}
              {:value "sectionD" :label "Basic Materials - Mining"
               :filter {:bool {:should {:term {"!sic07" "7fe3d9f3a3acb0e31711"}}}}}
              {:value "f20dffe25ed1413d3251" :label "Consumer Goods - Automobiles & Parts"
               :filter {:bool {:should {:term {"!sic07" "f20dffe25ed1413d3251"}}}}}
              {:value "497b5d8bd135811cbfcf" :label "Consumer Goods - Beverages"
               :filter {:bool {:should {:term {"!sic07" "497b5d8bd135811cbfcf"}}}}}
              {:value "d7bc4e5c3b8bcd8cb954" :label "Consumer Goods - Food Producers"
               :filter {:bool {:should {:term {"!sic07" "d7bc4e5c3b8bcd8cb954"}}}}}
              {:value "73577d127d8ac504f328" :label "Consumer Goods - Household Goods & Home Construction"
               :filter {:bool {:should {:term {"!sic07" "73577d127d8ac504f328"}}}}}
              {:value "0035d9338adcd4d206e7" :label "Consumer Goods - Leisure Goods"
               :filter {:bool {:should {:term {"!sic07" "0035d9338adcd4d206e7"}}}}}
              {:value "2f2c3fc1ce65b43416d4" :label "Consumer Goods - Personal Goods"
               :filter {:bool {:should {:term {"!sic07" "2f2c3fc1ce65b43416d4"}}}}}
              {:value "ed9ba3c0e6bc6e0a4ed8" :label "Consumer Services - Consultancy"
               :filter {:bool {:should {:term {"!sic07" "ed9ba3c0e6bc6e0a4ed8"}}}}}
              {:value "98fef0f7d4cdc02d0869" :label "Consumer Services - Food & Drug Retailers"
               :filter {:bool {:should {:term {"!sic07" "98fef0f7d4cdc02d0869"}}}}}
              {:value "f4b78af0a12ad417e462" :label "Consumer Services - General Retailers"
               :filter {:bool {:should {:term {"!sic07" "f4b78af0a12ad417e462"}}}}}
              {:value "fe56c0ef4b4758bd2585" :label "Consumer Services - Media"
               :filter {:bool {:should {:term {"!sic07" "fe56c0ef4b4758bd2585"}}}}}
              {:value "44fdddb6e762fd9b592f" :label "Consumer Services - Other"
               :filter {:bool {:should {:term {"!sic07" "44fdddb6e762fd9b592f"}}}}}
              {:value "4b9c26ac70ef8eb91e9e" :label "Consumer Services - Real Estate"
               :filter {:bool {:should {:term {"!sic07" "4b9c26ac70ef8eb91e9e"}}}}}
              {:value "c911bc2bca07165b8185" :label "Consumer Services - Travel & Leisure"
               :filter {:bool {:should {:term {"!sic07" "c911bc2bca07165b8185"}}}}}
              {:value "681245bb9031605662f3" :label "Energy - Alternative Energy"
               :filter {:bool {:should {:term {"!sic07" "681245bb9031605662f3"}}}}}
              {:value "3a9612bd0734ed35dbcd" :label "Energy - Energy Equipment, Services & Distribution"
               :filter {:bool {:should {:term {"!sic07" "3a9612bd0734ed35dbcd"}}}}}
              {:value "140668b1b46db56df601" :label "Energy - Equipment, Services & Distribution"
               :filter {:bool {:should {:term {"!sic07" "140668b1b46db56df601"}}}}}
              {:value "2c4ebd9b6ffad4499a72" :label "Energy - Oil & Gas Producers"
               :filter {:bool {:should {:term {"!sic07" "2c4ebd9b6ffad4499a72"}}}}}
              {:value "b88ff8c33affc4c8ca34" :label "Energy - Oil Equipment, Services & Distribution"
               :filter {:bool {:should {:term {"!sic07" "b88ff8c33affc4c8ca34"}}}}}
              {:value "6dc1c2c43eb8cfc1e0c0" :label "Energy- Alternative Energy"
               :filter {:bool {:should {:term {"!sic07" "6dc1c2c43eb8cfc1e0c0"}}}}}
              {:value "28eba22288b902df820c" :label "Financials - Banks"
               :filter {:bool {:should {:term {"!sic07" "28eba22288b902df820c"}}}}}
              {:value "147a4069e393256381c4" :label "Financials - Equity Investment Instruments"
               :filter {:bool {:should {:term {"!sic07" "147a4069e393256381c4"}}}}}
              {:value "02cbabdaead919d796bc" :label "Financials - Financial Services"
               :filter {:bool {:should {:term {"!sic07" "02cbabdaead919d796bc"}}}}}
              {:value "83ba842137293e09a414" :label "Financials - Life Insurance"
               :filter {:bool {:should {:term {"!sic07" "83ba842137293e09a414"}}}}}
              {:value "46dc32ea0524280a188c" :label "Financials - Non-Life Insurance"
               :filter {:bool {:should {:term {"!sic07" "46dc32ea0524280a188c"}}}}}
              {:value "d34ef9547ef6ce9cad0a" :label "Financials - Non-equity Investment Instruments"
               :filter {:bool {:should {:term {"!sic07" "d34ef9547ef6ce9cad0a"}}}}}
              {:value "d811d2038cc0ededca2a" :label "Financials - Real Estate Investment & Services"
               :filter {:bool {:should {:term {"!sic07" "d811d2038cc0ededca2a"}}}}}
              {:value "9733569679db2c1c0da8" :label "Financials - Real Estate Investment Trusts"
               :filter {:bool {:should {:term {"!sic07" "9733569679db2c1c0da8"}}}}}
              {:value "3b520aa16732d85a624e" :label "Health Care - Equipment & Services"
               :filter {:bool {:should {:term {"!sic07" "3b520aa16732d85a624e"}}}}}
              {:value "f170694ab2e4ec8c2c05" :label "Health Care - Pharmaceuticals & Biotechnology"
               :filter {:bool {:should {:term {"!sic07" "f170694ab2e4ec8c2c05"}}}}}
              {:value "4ba8830c8598aaeb72dd" :label "Industrials - Aerospace & Defense"
               :filter {:bool {:should {:term {"!sic07" "4ba8830c8598aaeb72dd"}}}}}
              {:value "e93d3e01f9ccfa5ad246" :label "Industrials - Construction & Materials"
               :filter {:bool {:should {:term {"!sic07" "e93d3e01f9ccfa5ad246"}}}}}
              {:value "d025a3f77e369996b442" :label "Industrials - Electronic & Electrical Equipment"
               :filter {:bool {:should {:term {"!sic07" "d025a3f77e369996b442"}}}}}
              {:value "99b361342ef25389ad3f" :label "Industrials - Engineering"
               :filter {:bool {:should {:term {"!sic07" "99b361342ef25389ad3f"}}}}}
              {:value "079587cb79567cdec643" :label "Industrials - General Industrials"
               :filter {:bool {:should {:term {"!sic07" "079587cb79567cdec643"}}}}}
              {:value "7864ed9e22505a433e4b" :label "Industrials - Support Services"
               :filter {:bool {:should {:term {"!sic07" "7864ed9e22505a433e4b"}}}}}
              {:value "c21772f16a38bdc6ff5e" :label "Industrials - Transportation"
               :filter {:bool {:should {:term {"!sic07" "c21772f16a38bdc6ff5e"}}}}}
              {:value "c5f72db94deebda39f42" :label "Industry Sectors"
               :filter {:bool {:should {:term {"!sic07" "c5f72db94deebda39f42"}}}}}
              {:value "4df616dabec9dc54d85d" :label "Oil & Gas - Oil Equipment, Services & Distribution"
               :filter {:bool {:should {:term {"!sic07" "4df616dabec9dc54d85d"}}}}}
              {:value "cd4f67c76eec685d55c0" :label "Other - Education Services"
               :filter {:bool {:should {:term {"!sic07" "cd4f67c76eec685d55c0"}}}}}
              {:value "90b092ede5bdcabbd018" :label "Technology - Hardware & Equipment"
               :filter {:bool {:should {:term {"!sic07" "90b092ede5bdcabbd018"}}}}}
              {:value "b4d37bf2372a15609474" :label "Technology - Software & Computer Services"
               :filter {:bool {:should {:term {"!sic07" "b4d37bf2372a15609474"}}}}}
              {:value "a052c16efb40ca8000d8" :label "Telecommunications - Fixed Line"
               :filter {:bool {:should {:term {"!sic07" "a052c16efb40ca8000d8"}}}}}
              {:value "7033499c23d50ef8c303" :label "Telecommunications - Mobile"
               :filter {:bool {:should {:term {"!sic07" "7033499c23d50ef8c303"}}}}}
              {:value "e8e450be96f495d7751f" :label "Utilities - Electricity"
               :filter {:bool {:should {:term {"!sic07" "e8e450be96f495d7751f"}}}}}
              {:value "5b50bce1e14583d44d44" :label "Utilities - Gas, Water & Multiutilities"
               :filter {:bool {:should {:term {"!sic07" "5b50bce1e14583d44d44"}}}}}
              ]}

   {:id :latest-turnover
    :type :checkboxes
    :label "Turnover"
    :visible true
    :controls true
    :options [;; {:value "any" :label "Any" :filter nil}
              {:value "min" :label "Less than £50,000" :filter {:range {"!latest_turnover" {:lt 50000}}}}
              {:value "low" :label "£50 – 100,000" :filter {:range {"!latest_turnover" {:gte 50000 :lt 100000}}}}
              {:value "lowmid" :label "£100 – 250,000" :filter {:range {"!latest_turnover" {:gte 100000 :lt 250000}}}}
              {:value "mid" :label "£250 – 500,000" :filter {:range {"!latest_turnover" {:gte 250000 :lt 500000}}}}
              {:value "highmid" :label "£500 – £1 million" :filter {:range {"!latest_turnover" {:gte 500000 :lt 1000000}}}}
              {:value "higher" :label "£1 – 5 million" :filter {:range {"!latest_turnover" {:gte 1000000 :lt 5000000}}}}
              {:value "highest" :label "More than £5 million" :filter {:range {"!latest_turnover" {:gte 5000000}}}}
              ]}

   {:id :employee-count
    :type :checkboxes
    :label "Employees"
    :visible true
    :controls true
    :options [{:value "min" :label "1–4" :filter {:range {"!latest_employee_count" {:lte 4}}}}
              {:value "min+" :label "5–9" :filter {:range {"!latest_employee_count" {:gt 4 :lte 9}}}}
              {:value "min++" :label "10–19" :filter {:range {"!latest_employee_count" {:gt 9 :lte 19}}}}
              {:value "min+++" :label "20–49" :filter {:range {"!latest_employee_count" {:gt 19 :lte 49}}}}
              {:value "mid" :label "50–99" :filter {:range {"!latest_employee_count" {:gt 49 :lte 99}}}}
              {:value "mid+" :label "100–249" :filter {:range {"!latest_employee_count" {:gt 99 :lte 249}}}}
              {:value "mid++" :label "250–499" :filter {:range {"!latest_employee_count" {:gt 249 :lte 499}}}}
              {:value "mid+++" :label "500–2499" :filter {:range {"!latest_employee_count" {:gt 499 :lte 2499}}}}
              {:value "max" :label "2500 or more" :filter {:range {"!latest_employee_count" {:gt 2499}}}}]}

   ])
