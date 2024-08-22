// 5mb
export const maxSize = 50000;

export const minImageDimensions = {width: 70, height: 70};

export const checkSize = (current: number): boolean => {
    if (current > maxSize) {
        return true;
    }
    throw Error(`Max image size ${maxSize / 1000}mb, current ${current / 1000}mb`)
}

export const checkImageResolution = (imageDimensions: { width: number; height: number }): boolean => {
    if (imageDimensions.width > minImageDimensions.width && imageDimensions.height > minImageDimensions.height) {
        return true;
    }
    throw Error(`Min image dimensions width ${minImageDimensions.width}, current ${imageDimensions.width} | height ${minImageDimensions.height}, current ${imageDimensions.height}`)
}


export const getFileAsBinaryString =  (files: FileList | null): Promise<string>  => {
    if(files && files.length > 0) {
        return  files[0].text();
    }
    throw Error('No File to upload')
}