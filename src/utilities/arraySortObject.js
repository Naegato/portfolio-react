export default function ArraySortObject (array, property = 'id') {
    try {
        if (!(array instanceof Array)) {
            throw new Error('Variable array must be an instance of Array')
        }

        if (array.length <2) {
            return array
        }


        // return pivot[property];

        const nullArray = array.filter((item) => ( item[property] == null ? '' : item[property] ).toString().localeCompare('') === 0)

        const notNullArray = array.filter((item) => ( item[property] == null ? '' : item[property] ).toString().localeCompare(''))

        // return {nullArray,notNullArray};
        const pivot = notNullArray[0];

        const bigger = notNullArray.filter((item) => ( item[property] == null ? '' : item[property] ).toString().localeCompare(( pivot[property] == null ? '' : pivot[property] ).toString()) > 0)
        const smaller = notNullArray.filter((item) => ( item[property] == null ? '' : item[property] ).toString().localeCompare(( pivot[property] == null ? '' : pivot[property] ).toString()) < 0)
        const same = notNullArray.filter((item) => ( item[property] == null ? '' : item[property] ).toString().localeCompare(( pivot[property] == null ? '' : pivot[property] ).toString()) === 0)


        // return {bigger,smaller, same};
        // const smaller = array.filter((item) => item[property].toString().localeCompare(pivot[property].toString()) === 1)
        // const bigger = array.filter((item) => item[property].toString().localeCompare(pivot[property].toString()) === -1)


        return [...nullArray,...ArraySortObject(bigger, property), ...same ,...ArraySortObject(smaller, property)]

    } catch (e) {
        // console.error(e)
        return null;
    }
}