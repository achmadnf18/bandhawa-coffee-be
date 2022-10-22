import { uuid } from 'uuidv4';

/**
 * @method isEmpty
 * @param {String | Number | Object} value
 * @returns {Boolean} true & false
 * @description this value is Empty Check
 */
export const isEmpty = (value: string | number | object): boolean => {
  if (value === null) {
    return true;
  } else if (typeof value !== 'number' && value === '') {
    return true;
  } else if (typeof value === 'undefined' || value === undefined) {
    return true;
  } else if (value !== null && typeof value === 'object' && !Object.keys(value).length) {
    return true;
  } else {
    return false;
  }
};

export const base64toImg = (
  base64: string,
): { image: Buffer; imageName: string; extension: string } => {
  const imageName = uuid();
  const extension = base64.match(/[^:]\w+\/[\w-+\d.]+(?=;|,)/)[0].split('/')[1];
  const image = Buffer.from(base64.split(',')[1], 'base64');

  return {
    image,
    imageName,
    extension,
  };
};
