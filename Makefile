asset-slug := bvca2_01

develop:
	boot dev target -d cljs-out/none
production:
	RAVEN_DSN="${BVCA_RAVEN_DSN}" boot production build target -d cljs-out/advanced
ancient:
	boot -d boot-deps ancient

backup-js:
	aws s3 cp --acl public-read --no-follow-symlinks s3://clustermap-static-assets/$(asset-slug)/clustermap.js  s3://clustermap-static-assets/$(asset-slug)/clustermap.js.`gdate -Iminutes`

sync-js-dry:
	aws s3 sync --acl public-read --dryrun cljs-out/advanced s3://clustermap-static-assets/$(asset-slug)

sync-js-dry-small:
	aws s3 sync --acl public-read --dryrun --exclude "*clustermap.out*" --include "*/clustermap/*" cljs-out/advanced  s3://clustermap-static-assets/$(asset-slug)

sync-js-small:
	aws s3 sync --acl public-read --exclude "*clustermap.out*" --include "*/clustermap/*" cljs-out/advanced  s3://clustermap-static-assets/$(asset-slug)

sync-js:
	aws s3 sync --acl public-read --exclude "*clustermap.out*" cljs-out/advanced s3://clustermap-static-assets/$(asset-slug)

sync-js-all:
	aws s3 sync --acl public-read cljs-out/advanced s3://clustermap-static-assets/$(asset-slug)

sync-public-dry:
	aws s3 sync --acl public-read --no-follow-symlinks --dryrun public s3://clustermap-static-assets/$(asset-slug)

sync-html:
	aws s3 sync --acl public-read --no-follow-symlinks --exclude "*" --include "*.html" public s3://clustermap-static-assets/$(asset-slug)
