# Yue Yao — AI, Robotics & Society

Personal academic website for Yue Yao, featuring research, publications, exhibitions, education and a downloadable résumé.

Website: https://yy3462-create.github.io/

## Updating the website

The site uses plain HTML and CSS, with a small JavaScript interaction on the SVD analysis page. Edit `index.html` for content, `styles.css` for presentation, and files in `assets/` for the portrait and résumé. GitHub Pages publishes the root of the `main` branch; `.nojekyll` preserves the static files without a Jekyll build.

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

- Oxford writing: *Materiality, Medium, and Site in Transformation: Tracing Shape of the Wind*, Yue Yao, Hilary Term 2021. Published as an explicitly unpublished Oxford research essay in Selected Writing. Public PDF removes the candidate number, fixes handscroll viewing direction and the Huang Gongwang figure date, and trims video player strips; all other text is retained. Artwork is by Bingyi, not Yue Yao. Homepage image is the original right panel of Figure 1, credited in the essay to *Bingyi: Fuchun, 2012.05* (Rick Widmer).
- `svd.html`: *Visual Style in the Singular Spectrum*, a richer presentation of the collaborative SVD exploration. The reconstruction demo uses three genuine processed painting matrices from the supplied dataset; float64 SVD reconstructions at ranks 1, 5, 10, 20, 40, 80, 160, 320 and 512. The demo is a new explanatory computation, not a rerun of all reported group statistics. `assets/svd-demo/data.json` records image paths, retained energy fractions and relative Frobenius errors. Images show clipped 8-bit grayscale values; metrics use unrounded matrices. Full-rank reconstruction errors are below 3e-15. Figures 1, 3 and 4 from the original report retain their numbering.

- UBC writing: *Memory, Space, and Selfhood in Transition: Yin Xiuzhen’s Heterotopographic Vision of Beijing*, Yue Yao, 2019. Listed as a symposium presentation in the [official UBC program](https://ahva.ubc.ca/events/event/15th-annual-undergraduate-art-history-symposium/), not as a confirmed journal publication. The supplied 11-page essay is preserved unchanged. Homepage image is Figure 1, *Portable City: Beijing* (2001), extracted without cropping; © 2019 Yin Xiuzhen, courtesy of Pace Gallery. The artwork is by Yin Xiuzhen; Yue Yao is the essay author.
