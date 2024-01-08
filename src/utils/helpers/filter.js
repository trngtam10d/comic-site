export const filter = (arr, selected, attr) => {
    const filtered = arr?.filter(val => val?.type === selected)[0];
    return attr ? filtered?.attributes[attr] || 'No' + attr : filtered;
}