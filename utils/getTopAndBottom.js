export default (arr, cb) => {
  cb({top: arr[0], bottom: arr[arr.length - 1]});
};
