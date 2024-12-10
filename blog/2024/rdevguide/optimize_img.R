source("R/optimize_photo.R")

# directory with image(s) to optimize
image_dir <- file.path("blog", "2024", "rdevguide")

# reduce thumbnail image to 300px wide
# in this case stripping metadata makes a big difference to file size
# use quality 100 here as that is better for an image with text
# don't change format as post already published (avoid re-rendering with different date)
# see R/optimize_photo.R
img_opt <- optimize_img("r-development-guide.jpg", input_dir = image_dir,
                        width = 300, strip = TRUE, quality = 100, format = NULL)

# in this case we keep original and link to optimized/r-development-guide.jpg

# alternatively overwrite original with optimized image and delete optimized dir
# accept_optimized("r-development-guide.jpg", image_dir)
