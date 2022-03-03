let arr = [10, 70, 20, 30, 50, 60, 90, 80]

let arr_length = arr.length

quickSort(arr, 0, arr_length - 1)

function swap(arr, i, j) {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

function partArray(arr, first_index, last_index) {
  let part_value = arr[last_index]

  let i = first_index - 1

  for (let j = first_index; j < last_index - 1; j++) {
    if (arr[j] < part_value) {
      i++
      swap(arr, i, j)
    }
  }
  swap(arr, i + 1, j)
  return i + 1
}

function quickSort(arr, first_index, last_index) {
  if (first_index < last_index) {
    //part the array
    let part = partArray(arr, first_index, last_index)

    quickSort(arr, first_index, part - 1)
    quickSort(arr, part + 1, last_index)
  }
}
