// 5mb
export const maxSize = 500000;

export const minImageDimensions = {width: 70, height: 70};

export const checkSize = (current: number): boolean => {
    if (current < maxSize) {
        return true;
    }
    throw Error(`Max image size ${maxSize / 100000}mb, current ${Math.floor(current / 100000)}mb`)
}

export const checkImageResolution = (imageDimensions: { width: number; height: number }): boolean => {
    if (imageDimensions.width > minImageDimensions.width && imageDimensions.height > minImageDimensions.height) {
        return true;
    }
    throw Error(`Min image dimensions width ${minImageDimensions.width}, current ${imageDimensions.width} | height ${minImageDimensions.height}, current ${imageDimensions.height}`)
}