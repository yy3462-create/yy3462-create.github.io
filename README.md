# Yue Yao — AI, Robotics & Society

Personal academic website for Yue Yao, featuring research, publications, exhibitions, education and a downloadable résumé.

Website: https://yy3462-create.github.io/

## Updating the website

The site uses plain HTML and CSS. Edit `index.html` for content, `styles.css` for presentation, and files in `assets/` for the portrait and résumé. GitHub Pages publishes the root of the `main` branch; `.nojekyll` preserves the static files without a Jekyll build.

## Media credits

- Portrait supplied by Yue Yao.
- ReTracing photograph: Yitong Wang and Yue Yao, Figure 2 of [ReTracing](https://arxiv.org/html/2602.11242v1), CC BY 4.0. The original credit is also displayed beside the image on the website.

- EPA auditing framework: Jianing Fan and Yue Yao, Figure 1 of [Who Gets Heeded?](https://arxiv.org/html/2608.10329v1), CC BY 4.0.
- ReTracing preview video and pipeline: [official project](https://ellywang66.github.io/ReTracing/), Yitong Wang and Yue Yao. Preview transcoded to H.264 MP4 for browser compatibility. Full film linked from the CVPR Art project page.
- ReTracing motion reconstruction: Figure 5 of the [paper](https://arxiv.org/html/2602.11242v1), CC BY 4.0; resized for the website.
- Archived robot simulation asset: `media/hexapod_r4d2_d25m_mujoco.mp4` from [Co-Design Rankings Do Not Survive Realization](https://github.com/yy3462-create/codesign-realization-gap). Poster is a frame from the clip. This is a flat-ground abstract-model trajectory replay rendered in MuJoCo.
- SVD coursework figures: unchanged Figures 3 and 4 from the author-supplied *SVD as a Lens for Visual Information Structure*, Bruce Fan, Yue Yao, William Chang, Leonard Holler, MATH UN2015, Spring 2026.
- MoMA chart: regenerated from [gender_by_year_acq.csv](https://github.com/yy3462-create/moma_artist_analysis/blob/main/data/processed/gender_by_year_acq.csv). Female counts are divided by all artist–acquisition-year records (Female, Male, Unknown), summed per decade. Coverage: 1929–2016; artists may recur across years. This chart does not count artworks or globally unique artists.

The videos load on demand and do not autoplay. Exploratory projects are presented briefly in Explorations, separately from publications. Source coursework PDFs and the unpublished locomotion manuscript are not bundled with the site.

- Featured robot project: [Locomotion Selects for Symmetry](https://jl6017.github.io/icos-codesign/), Jiong Lin, Yue Yao and Hod Lipson, Creative Machines Lab, Columbia University. Video `media/g0_444_0_r4d2_d25m_mujoco.mp4` is the official A3a abstract-model replay; poster is its 6-second frame. The older ranking-transfer repository is not the featured project link.
- Impressionist painting grid: 18 selected image records from the author-supplied `svd_dataset/metadata.csv`: Monet (3), Pissarro (5), Renoir (5), Sisley (5). Fifteen Met images are individually verified public domain, supplied under [Met Open Access / CC0](https://www.metmuseum.org/hubs/open-access); three Monet reproductions are public domain images from Wikimedia Commons. Full per-image artist, artwork, museum, source and license records are in `assets/paintings/credits.json`. Mechanical 320px maximum thumbnails retain full compositions; the gallery is an HTML grid, not a generated or flattened image. The dataset has 65 painting image records and 65 photographs; those counts do not establish 65 unique artworks.
