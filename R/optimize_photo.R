# functions to "optimize" image files, i.e. reduce to reasonable size for web
# optimized photos are put in "optimized" subdirectory of input_dir
# once you are happy with result (file size and visual quality)
# either keep originals and link to optimized images,
# or use `accept_optimized` function to overwrite originals and
# delete optimized subdirectory

library(magick)
library(tools)

optimize_img <- function(
    file, # image file to optimize
    input_dir = ".", # directory containing the file
    filter = "Lanczos", # default filter; "Triangle" can also work well
    width = 800, # 800px good for full width image, preview thumbnails are 230px
    strip = FALSE, # stripping metadata, e.g. colour profile can save space
    quality = 82, # may want 100 for screenshots/images with text; affects jpg only
    compression = "Zip", # only really makes difference for png
    format = "png" # recommend "png", can use NULL to get same format as input
){
    img <- image_read(file.path(image_dir, file))
    
    if (image_info(img)$width > width){
      # resize to `width` px, using specified filter to sample pixels
      img <- image_resize(img, geometry_size_pixels(width = width), 
                          filter = filter)
    }
    
    # strip metadata (may include date photo taken colour profile, colour space
    if (strip) img <- image_strip(img)
    
    if (is.null(format)) format <- file_ext(files[i])
    
    output_dir <- file.path(input_dir, "optimized")
    if (!dir.exists(output_dir)) dir.create(output_dir)
    output_file <- file.path(output_dir, 
                             paste0(file_path_sans_ext(files[i]), ".",
                                    format))
    image_write(img, output_file, 
                format = format, quality = quality, compression = compression)
}

# Check results - if photos have already been reduced in size, results may be
# worse! May also want to crop before over-writing originals.

accept_optimized <- function(file, input_dir = "."){
  output_dir <- file.path(input_dir, "optimized")
  file.rename(file.path(output_dir, file), file.path(input_dir, file))
  clean <- !length(list.files(output_dir))
  if (clean) unlink(output_dir, recursive = TRUE, force = TRUE)
}
