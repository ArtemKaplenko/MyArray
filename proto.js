const methodsPrototype = {
  includes: function (searchElement, fromIndex = 0) {
    // если fromIndex больше или равен длине массива то поиска не будет
    if (fromIndex >= this.length) {
      return false;
    } else if (fromIndex < 0) {
      // если fromIndex отрицательный то вычисляем this.length + fromIndex и идем по возрастанию

      const from = this.length + fromIndex;
      if (from < 0) {
        // если this.length + fromIndex меньше нуля то поиск будет по всему массиву
        fromIndex = 0;
      } else {
        fromIndex = from;
      }
    }

    for (let i = fromIndex; i < this.length; i++) {
      if (this.array[i] === searchElement) {
        return true;
      } else if (isNaN(searchElement) && isNaN(this.array[i])) {
        return true;
      }
    }
    return false;
  },


  indexOf: function (searchElement, fromIndex = 0) {
    if (fromIndex >= this.length) {
      return -1;
    } else if (fromIndex < 0) {

      const from = this.length + fromIndex;
      if (from < 0) {
        fromIndex = 0;
      } else {
        fromIndex = from;
      }
    }

    for (let i = fromIndex; i < this.length; i++) {
      if (this.array[i] === searchElement) {
        return i;
      } else if (isNaN(searchElement) && isNaN(this.array[i])) {
        return i;
      }
    }
    return -1;
  },


  push: function () {
    for (let i = 0; i < arguments.length; i++) {
      this.array[this.length] = arguments[i];
      this.length += 1;
    }
  },


  pop: function () {
    const afterDelete = {};
    const last = this.array[this.length - 1];
    this.length -= 1;
    for (let i = 0; i < this.length; i++) {
      afterDelete[i] = this.array[i];
    }
    this.array = afterDelete;
    return last;
  },


  slice: function (begin = 0, end = this.length) {
    const resultArr = new MyArray();

    if (begin < this.length && end <= this.length) {

      begin = (begin < 0) ? this.length + begin : begin;
      if(begin < 0) {
        begin = 0;
      }

      end = (end < 0) ? this.length + end : end;
      if(end < 0) {
        end = this.length;
      }

      for (let i = begin; i < end; i++) {
        resultArr.push(this.array[i]);
      }
    }

    return resultArr;
  },


  concat: function () {
    const newMyArr = Object.assign(new MyArray(), this);

    for (let i = 0; i < arguments.length; i++) {
      if (MyArray.isMyArray(arguments[i])) {
        for (let j = 0; j < arguments[i].length; j++) {
          newMyArr.push(arguments[i].array[j]);
        }
      } else if (Array.isArray(arguments[i])) {
        for (let j = 0; j < arguments[i].length; j++) {
          newMyArr.push(arguments[i][j]);
        }
      } else {
        newMyArr.push(arguments[i]);
      }
    }

    return newMyArr;
  },


  unshift: function (...elements) {
    const newArr = new MyArray();
    for (let i = 0; i < elements.length; i++) {
      newArr.push(elements[i]);
    }
    for (let i = 0; i < this.length; i++) {
      newArr.push(this.array[i]);
    }
    this.array = newArr.array;
    this.length = newArr.length;
  },


  shift: function () {
    const newArr = new MyArray();
    for(let i = 1; i < this.length; i++ ) {
      newArr.push(this.array[i]);
    }
    this.array = newArr.array;
    this.length -= 1;
  },


  reverse: function () {
    const newArr = new MyArray();
    for (let i = this.length - 1 ; i >= 0; i--) {
      newArr.push(this.array[i]);
    }
    for (let i = 0; i < this.length; i++) {
      this.array[i] = newArr.array[i];
    }
    return newArr;
  },


  forEach: function (callback) {
    for (const index in this.array) {
      callback(this.array[index], index, this);
    }
  },
};
