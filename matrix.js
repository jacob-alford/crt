class Matrix{
  constructor(arr,shape=arr.length){
    if(arr[0] === undefined || typeof arr == "string"){ // if arr isn't an array
      console.error("Matrix requires a numeric array as input!");
      return false;
    }
    if(arr.length == 1){
      console.error("Input array must have at least two values!");
      return false;
    }
    let counter=0;
    let outArr = [];
    if(typeof shape == "number"){
      let temp = shape;
      shape = [1,temp];
    }else if(shape.length == 1){
      let temp = shape;
      shape = [1,temp[0]];
    }
    if(shape.reduce((a,c)=>a=a*c) == arr.length){
      if(shape.length == 2){
        for(let i1=0;i1<shape[0];i1++){
          outArr.push([]);
          for(let i2=0;i2<shape[1];i2++){
            outArr[i1][i2] = arr[counter];
            counter++;
          }
        }
      }else if(shape.length == 3){
        for(let i1=0;i1<shape[0];i1++){
          outArr.push([]);
          for(let i2=0;i2<shape[1];i2++){
            outArr[i1].push([]);
            for(let i3=0;i3<shape[2];i3++){
              outArr[i1][i2].push(arr[counter]);
              counter++;
            }
          }
        }
      }else if(shape.length == 4){
        for(let i1=0;i1<shape[0];i1++){
          outArr.push([]);
          for(let i2=0;i2<shape[1];i2++){
            outArr[i1].push([]);
            for(let i3=0;i3<shape[2];i3++){
              outArr[i1][i2].push([]);
              for(let i4=0;i4<shape[3];i4++){
                outArr[i1][i2][i3].push(arr[counter]);
                counter++;
              }
            }
          }
        }
      }else if(shape.length == 5){
        for(let i1=0;i1<shape[0];i1++){
          outArr.push([]);
          for(let i2=0;i2<shape[1];i2++){
            outArr[i1].push([]);
            for(let i3=0;i3<shape[2];i3++){
              outArr[i1][i2].push([]);
              for(let i4=0;i4<shape[3];i4++){
                outArr[i1][i2][i3].push([]);
                for(let i5=0;i5<shape[4];i5++){
                  outArr[i1][i2][i3][i4].push(arr[counter]);
                  counter++;
                }
              }
            }
          }
        }
      }else if(shape.length == 6){
        for(let i1=0;i1<shape[0];i1++){
          outArr.push([]);
          for(let i2=0;i2<shape[1];i2++){
            outArr[i1].push([]);
            for(let i3=0;i3<shape[2];i3++){
              outArr[i1][i2].push([]);
              for(let i4=0;i4<shape[3];i4++){
                outArr[i1][i2][i3].push([]);
                for(let i5=0;i5<shape[4];i5++){
                  outArr[i1][i2][i3][i4].push([]);
                  for(let i6=0;i6<shape[5];i6++){
                    outArr[i1][i2][i3][i4][i5].push(arr[counter]);
                    counter++;
                  }
                }
              }
            }
          }
        }
      }
      this.data = outArr;
      this.shape = shape;
      this.plain = arr;
      return this;
    }else{
      console.error("Input shape must match the number of items in input array!");
      return false;
    }
  }
  // --- Manage ---
  resetData(arr = this.plain,shape = this.shape){
    let counter=0;
    let outArr = [];
    let plainArr = [];
    if(shape.reduce((a,c)=>a=a*c) == arr.length){
      if(shape.length == 1){
        for(let i1=0;i1<shape[0];i1++){
          outArr.push(arr[counter]);
          plainArr.push(arr[counter]);
          counter++;
        }
      }else if(shape.length == 2){
        for(let i1=0;i1<shape[0];i1++){
          outArr.push([]);
          for(let i2=0;i2<shape[1];i2++){
            outArr[i1][i2] = arr[counter];
            plainArr.push(arr[counter]);
            counter++;
          }
        }
      }else if(shape.length == 3){
        for(let i1=0;i1<shape[0];i1++){
          outArr.push([]);
          for(let i2=0;i2<shape[1];i2++){
            outArr[i1].push([]);
            for(let i3=0;i3<shape[2];i3++){
              outArr[i1][i2].push(arr[counter]);
              plainArr.push(arr[counter]);
              counter++;
            }
          }
        }
      }else if(shape.length == 4){
        for(let i1=0;i1<shape[0];i1++){
          outArr.push([]);
          for(let i2=0;i2<shape[1];i2++){
            outArr[i1].push([]);
            for(let i3=0;i3<shape[2];i3++){
              outArr[i1][i2].push([]);
              for(let i4=0;i4<shape[3];i4++){
                outArr[i1][i2][i3].push(arr[counter]);
                plainArr.push(arr[counter]);
                counter++;
              }
            }
          }
        }
      }else if(shape.length == 5){
        for(let i1=0;i1<shape[0];i1++){
          outArr.push([]);
          for(let i2=0;i2<shape[1];i2++){
            outArr[i1].push([]);
            for(let i3=0;i3<shape[2];i3++){
              outArr[i1][i2].push([]);
              for(let i4=0;i4<shape[3];i4++){
                outArr[i1][i2][i3].push([]);
                for(let i5=0;i5<shape[4];i5++){
                  outArr[i1][i2][i3][i4].push(arr[counter]);
                  plainArr.push(arr[counter]);
                  counter++;
                }
              }
            }
          }
        }
      }else if(shape.length == 6){
        for(let i1=0;i1<shape[0];i1++){
          outArr.push([]);
          for(let i2=0;i2<shape[1];i2++){
            outArr[i1].push([]);
            for(let i3=0;i3<shape[2];i3++){
              outArr[i1][i2].push([]);
              for(let i4=0;i4<shape[3];i4++){
                outArr[i1][i2][i3].push([]);
                for(let i5=0;i5<shape[4];i5++){
                  outArr[i1][i2][i3][i4].push([]);
                  for(let i6=0;i6<shape[5];i6++){
                    outArr[i1][i2][i3][i4][i5].push(arr[counter]);
                    plainArr.push(arr[counter]);
                    counter++;
                  }
                }
              }
            }
          }
        }
      }
      this.data = outArr;
      this.plain = plainArr;
      this.shape=shape;
      return this;
    }else{
      console.error("Input shape must match the number of items in input array!");
      return false;
    }
  }
  reshape(newShape){
    if(newShape.reduce((a,c)=>a=a*c) == this.shape.reduce((a,c)=>a=a*c)){
      this.resetData(this.plain,newShape);
      return this;
    }else{
      console.error("Number of items must match total dimension specs!");
      return false;
    }
  }
  static duplicate(a){
    return new Matrix(a.plain,a.shape);
  }
  static matFromVecs(...args){
    if(args[0].shape === undefined){
      let tempArr = [];
      args[0].forEach(c => tempArr.push(c));
      args = tempArr;
    }
    let check = true;
    for(let i=0;i<args.length;i++){
      for(let j=0;j<args.length;j++){
        if(!sameArr(args[i].shape,args[j].shape)) check = false;
      }
    }
    if(check){
      if(args[0].shape.includes(1)){
        if(args[0].shape.indexOf(1) == 0){ // row vector
          let tempMat = mat_ones([args.length,args[0].shape[1]]);
          args.forEach((c,i) => {
            tempMat.setRow(i,c);
          });
          return tempMat;
        }else{  // column vector
          let tempMat = mat_ones([args[0].shape[0],args.length]);
          args.forEach((c,i) => {
            tempMat.setCol(i,c);
          });
          return tempMat;
        }
      }else{
        console.error("Matricies must be vectors!");
        return false;
      }
    }else{
      console.error("Not all vector shapes match!");
      return false;
    }
  }
  colsToVectors(){
    if(this.shape.length == 2){
      let temp = Matrix.transpose(this);
      let outArr = [];
      temp.data.forEach(c => {
        let tempVec = new Vector(c);
        outArr.push(tempVec.transpose());
      });
      return outArr;
    }else{
      console.error("Only works with 2-dimensional matricies!");
      return false;
    }
  }
  rowsToVectors(){
    if(this.shape.length == 2){
      let temp = Matrix.duplicate(this);
      let outArr = [];
      temp.data.forEach(c => outArr.push(new Vector(c)));
      return outArr;
    }else{
      console.error("Only works with 2-dimensional matricies!");
      return false;
    }
  }
  static matFromMatsByCol(...args){
    let check = true;
    for(let i=0;i<args.length;i++){
      for(let j=0;j<args.length;j++){
        if(args[i].shape[0] != args[j].shape[0]) check = false;
      }
    }
    if(check){
      if(args[0].shape.length == 2 && !args[0].shape.includes(1)){
        let colArr = [];
        args.forEach(c => {
          let tempArr = c.colsToVectors();
          tempArr.forEach(vec => colArr.push(vec));
        });
        return Matrix.matFromVecs(colArr);
      }else{
        console.error("Function only concatonates 2-dimensional matricies!");
        return false;
      }
    }else{
      console.error("One or more shape mismatch!");
      return false;
    }
  }
  static matFromMatsByRow(...args){
    let check = true;
    for(let i=0;i<args.length;i++){
      for(let j=0;j<args.length;j++){
        if(args[i].shape[1] != args[j].shape[1]) check = false;
      }
    }
    if(check){
      if(args[0].shape.length == 2 && !args[0].shape.includes(1)){
        let colArr = [];
        args.forEach(c => {
          let tempArr = c.rowsToVectors();
          tempArr.forEach(vec => colArr.push(vec));
        });
        console.log(colArr);
        return Matrix.matFromVecs(colArr);
      }else{
        console.error("Function only concatonates 2-dimensional matricies!");
        return false;
      }
    }else{
      console.error("One or more shape mismatch!");
      return false;
    }
  }
  splitByCol(low,high=this.shape[1]-1){ //low and high are inclusive by index
    let vecs = this.colsToVectors();
    let outArr = [];
    vecs.forEach((c,i) => {
      if(i>=low && i<=high) outArr.push(c);
    });
    return Matrix.matFromVecs(outArr);
  }
  splitByRow(low,high=this.shape[0]-1){ //low and high are inclusive by index
    let vecs = this.rowsToVectors();
    let outArr = [];
    vecs.forEach((c,i) => {
      if(i>=low) outArr.push(c);
    });
    return Matrix.matFromVecs(outArr);
  }
  // --- Get and Set ---
  static getValue(a,...args){
    if(a.shape.length == args.length){
      if(a.shape.length == 2) return a.data[args[0]][args[1]];
      else if(a.shape.length == 3) return a.data[args[0]][args[1]][args[2]];
      else if(a.shape.length == 4) return a.data[args[0]][args[1]][args[2]][args[3]];
      else if(a.shape.length == 5) return a.data[args[0]][args[1]][args[2]][args[3]][args[4]];
      else if(a.shape.length == 6) return a.data[args[0]][args[1]][args[2]][args[3]][args[4]][args[5]];
    }else{
        console.error("The number of coordinates must match the shape of matrix!");
        return false;
    }
  }
  static setValue(a,val,...args){
    if(a.shape.length == args.length){
      let indexCheck = 0;
      args.forEach((c,i) => indexCheck += (i+1)*c*a.shape[a.shape.length-i-1]);
      a.plain[indexCheck] = val;
      if(a.shape.length == 2) a.data[args[0]][args[1]] = val;
      else if(a.shape.length == 3) a.data[args[0]][args[1]][args[2]] = val;
      else if(a.shape.length == 4) a.data[args[0]][args[1]][args[2]][args[3]] = val;
      else if(a.shape.length == 5) a.data[args[0]][args[1]][args[2]][args[3]][args[4]] = val;
      else if(a.shape.length == 6) a.data[args[0]][args[1]][args[2]][args[3]][args[4]][args[5]] = val;
      return a;
    }else{
        console.error("The number of coordinates must match the shape of matrix!");
        return false;
    }
  }
  getRow(n){
    if(this.shape.length == 2){
      if(!this.shape.includes(1)){
        if(n < this.shape[0]){
          return new Matrix(this.data[n]);
        }else{
          console.error("That row doesn't exist in this matrix!");
          return false;
        }
      }else{ // a vector
        if(this.shape[0] > this.shape[1]){ // Column Vector
          console.error("getRow for vectors only works on row vectors!");
          return false;
        }else{ // Row Vector
          if(n > 1){
            return Matrix.duplicate(this);
          }else{
            console.error("That column doesn't exist in this matrix!");
            return false;
          }
        }
      }
    }else{
      console.error("Only currently implemented for two dimensional matricies!");
      return false;
    }
  }
  getCol(n){
    if(this.shape.length == 2){
      if(!this.shape.includes(1)){
        if(n < this.shape[1]){
          return new Matrix(Matrix.transpose(this).getRow(n).plain);
        }else{
          console.error("That column doesn't exist in this matrix!");
          return false;
        }
      }else{ // A vector
        if(this.shape[0] > this.shape[1]){ //Column Vector
          if(n==0){
            return Matrix.transpose(this);
          }else{
            console.error("That column doesn't exist in this matrix!");
            return false;
          }
        }else{ // Row Vector
          console.error("getCol for vectors only works on column vectors!");
          return false;
        }
      }
    }else{
      console.error("Only currently implemented for two dimensional matricies!");
      return false;
    }
  }
  getSlice(n){ // Generalize getRow but for any dimension greater than 2
    if(this.shape.length > 2){
      if(n < this.shape[0]){
        let newShape = [];
        for(let i=1;i<this.shape.length;i++) newshape.push(this.shape[i]);
        return new Matrix(this.data[n],newShape);
      }else{
        console.error("Specified slice lies outside of the matrix parameters!");
        return false;
      }
    }else{
      console.error("getSlice only operates on matricies of dimension greater than 2!");
      return false;
    }

  }
  setRow(n,vec){ // sets row n to 'vec'
    if(this.shape.length == 2 && !this.shape.includes(1)){
      if(n <= this.shape[0]){
        if(vec.shape.length == 2 && vec.shape.includes(1)){
          if(vec.shape[1-vec.shape.indexOf(1)] == this.shape[1]){
            let wrkArr = this.data;
            wrkArr[n] = vec.plain;
            this.resetData(flattenArr(wrkArr,this.shape),this.shape);
            return this;
          }else{
            console.error("Vector and matrix row shape mismatch!");
            return false;
          }
        }else{
          console.error("setRow requires a vector to replace row!");
          return false;
        }
      }else{
        console.error("Specified row doesn't exist in specified matrix!");
        return false;
      }
    }else{
      console.error("setRow only works on two-dimensional matricies");
      return false;
    }
  }
  setCol(n,vec){
    if(this.shape.length == 2 && !this.shape.includes(1)){
      if(n <= this.shape[1]){
        if(vec.shape.length == 2 && vec.shape.includes(1)){
          if(vec.shape[1-vec.shape.indexOf(1)] == this.shape[0]){
            let wrkArr = Matrix.transpose(this).data;
            wrkArr[n] = vec.plain;
            this.resetData(flattenArr(wrkArr,this.shape.reverse()),this.shape).transpose();
            return this;
          }else{
            console.error("Vector and matrix column shape mismatch!");
            return false;
          }
        }else{
          console.error("setCol requires a vector to replace column!");
          return false;
        }
      }else{
        console.error("Specified column doesn't exist in specified matrix!");
        return false;
      }
    }else{
      console.error("setCol only works on two-dimensional matricies");
      return false;
    }
  }
  // --- Limit ---
  cap(n){
    for(let i=0;i<this.plain.length;i++){
      if(this.plain[i] > n) this.plain[i] = n;
    }
    this.resetData();
    return this;
  }
  // --- View ---
  print(){
    let str = `Shape: ${this.shape}\n`;
    for(let i=0;i<this.shape[0];i++){
      str += `${this.data[0][0]}`;
      for(let j=1;j<this.shape[1];j++){
        str += `, ${this.data[i][j]}`;
      }
      str += "\n";
    }
    return str;
  }
  // --- Reduction ---
  max(){
    return this.plain.reduce((a,c) => {
      if(a>=c) return a;
      else return c;
    });
  }
  min(){
    return this.plain.reduce((a,c) => {
      if(a<=c) return a;
      else return c;
    });
  }
  sum(){
    return this.plain.reduce((a,c) => a += c);
  }
  product(){
    return this.plain.reduce((a,c) => a = a*c);
  }
  mean(){
    return this.sum()/this.plain.length;
  }
  static expVal(a,weights = mat_ones(a.shape).div(a.plain.length),probabilities = true){ // If weight matrix contains probabilities
    if(probabilities){
      return Matrix.mul(a,weights).sum();
    }else{
      return Matrix.mul(a,weights).sum()/a.plain.length;
    }
  }
  static var(a,weights = mat_ones(a.shape).div(a.plain.length),probabilities = true){
      return Matrix.expVal(Matrix.pow(a,2),weights,probabilities) - Math.pow(Matrix.expVal(a,weights),2);
  }
  static stDev(a,weights = mat_ones(a.shape).div(a.plain.length),probabilities=true){
    return Math.sqrt(Matrix.var(a,weights,probabilities));
  }
  static cov(a,b){
    return Matrix.mul(a,b).sum()-a.sum()*b.sum()/a.plain.length;
  }
  static corr(a,b){
    let SSx = Matrix.pow(a,2).sum() - Math.pow(a.sum(),2)/a.plain.length;
    let SSy = Matrix.pow(b,2).sum() - Math.pow(b.sum(),2)/b.plain.length;
    let SSxy = Matrix.mul(a,b).sum()-a.sum()*b.sum()/a.plain.length;
    return SSxy/Math.sqrt(SSx*SSy);
  }
  static linReg(a,b,fn = false){
    let SSx = Matrix.pow(a,2).sum() - Math.pow(a.sum(),2)/a.plain.length;
    let SSy = Matrix.pow(b,2).sum() - Math.pow(b.sum(),2)/b.plain.length;
    let SSxy = Matrix.mul(a,b).sum()-a.sum()*b.sum()/a.plain.length;
    let b1 = SSxy/SSx;
    let b0 = b.mean() - b1*a.mean();
    if(fn) return x => x*b1+b0;
    else if(fn == "both") return [[b0,b1],x => x*b1+b0];
    else return [b0,b1];
  }
  static reg(a,b,degree=1,fn=false){
    if(sameArr(a.shape,b.shape)){
      if(a.shape.includes(1) && a.shape.length == 2){

        let X = Matrix.duplicate(a);
        let Y = Matrix.duplicate(b);
        if(a.shape.indexOf(1) == 0){ // Row Vectors
          X.transpose();
          Y.transpose();
        }
        let M;
        if(degree == 1){
          M = Matrix.matFromVecs(mat_ones(X.shape),X);
        }else if(degree == 2){
          M = Matrix.matFromVecs(mat_ones(X.shape),X,Matrix.pow(X,2));
        }else if(degree == 3){
          M = Matrix.matFromVecs(mat_ones(X.shape),X,Matrix.pow(X,2),Matrix.pow(X,3));
        }else if(degree == 4){
          M = Matrix.matFromVecs(mat_ones(X.shape),X,Matrix.pow(X,2),Matrix.pow(X,3),Matrix.pow(X,4));
        }else if(degree == 5){
          M = Matrix.matFromVecs(mat_ones(X.shape),X,Matrix.pow(X,2),Matrix.pow(X,3),Matrix.pow(X,4),Matrix.pow(X,5));
        }else if(degree == 6){
          M = Matrix.matFromVecs(mat_ones(X.shape),X,Matrix.pow(X,2),Matrix.pow(X,3),Matrix.pow(X,4),Matrix.pow(X,5),Matrix.pow(X,6));
        }else{
          console.error("Reg only currently supports up to a sixth degree polynomial regression!");
          return false;
        }
        let MtM = Matrix.matMul(Matrix.transpose(M),M);
        let MtMi = Matrix.invert(MtM);
        let V = Matrix.matMul(MtMi,Matrix.matMul(Matrix.transpose(M),Y));
        return V.plain;
      }else{
        console.error("A and B must be vectors!");
        return false;
      }
    }else{
      console.error("Matrix A, and B Shape Mismatch!");
      return false;
    }
  }
  // --- Multivariate Statistics ---
  meanByCol(){
    if(!this.shape.includes(1) && this.shape.length == 2){
      let vecs = this.colsToVectors();
      let means = [];
      vecs.forEach(c => means.push(c.mean()));
      return new Vector(means,"col");
    }else{
      console.error(`Taking the mean column-wise requires a two-dimensional matrix!, this matrix has a shape of ${this.shape}`);
      return false;
    }
  }
  toDeviationVectors(){ // Returns array of column vectors
    if(!this.shape.includes(1) && this.shape.length == 2){
      let vecArr = [];
      for(let i=0;i<this.shape[1];i++){
        vecArr.push(new Vector(this.getCol(i).sub(this.getCol(i).mean()).plain,"col"));
      }
      return vecArr;
    }else{
      console.error(`Splitting a matrix into deviation vectors requires a two-dimensional matrix!, this matrix has a shape of ${this.shape}`);
      return false;
    }
  }
  static covMatrix(a){ // Variance/Covariance Matrix
    if(!a.shape.includes(1) && a.shape.length == 2){
      let devVecs = a.toDeviationVectors();
      let newShape = [devVecs.length,devVecs.length];
      let outArr = [];
      for(let i=0;i<devVecs.length;i++){
        for(let j=0;j<devVecs.length;j++){
          outArr.push(Matrix.innerProduct(devVecs[i],devVecs[j])/devVecs[0].plain.length);
        }
      }
      return new Matrix(outArr,newShape);
    }else{
      console.error(`Generating a variance/covariance matrix requires a two-dimensional matrix input!, this matrix has a shape of ${a.shape}`);
      return false;
    }
  }
  static corrMatrix(a){
    if(!a.shape.includes(1) && a.shape.length == 2){
      let devVecs = a.toDeviationVectors();
      let newShape = [devVecs.length,devVecs.length];
      let outArr = [];
      for(let i=0;i<devVecs.length;i++){
        for(let j=0;j<devVecs.length;j++){
          let sij = Matrix.innerProduct(devVecs[i],devVecs[j])/devVecs[0].plain.length;
          let sii = Matrix.innerProduct(devVecs[i],devVecs[i])/devVecs[0].plain.length;
          let sjj = Matrix.innerProduct(devVecs[j],devVecs[j])/devVecs[0].plain.length;
          outArr.push(sij/(Math.sqrt(sii)*Math.sqrt(sjj)));
        }
      }
      return new Matrix(outArr,newShape);
    }else{
      console.error(`Generating a correlation matrix requires a two-dimensional matrix!, this matrix has a shape of ${a.shape}`);
      return false;
    }
  }
  //--- Math ---
  static add(a,b){
    let outArr = [];
    if(sameArr(a.shape,b.shape)){
      for(let c=0;c<a.plain.length;c++) outArr.push(a.plain[c] + b.plain[c]);
      return new Matrix(outArr,a.shape);
    }else{
      console.error("Matricies must match in shape for piecewise addition!");
      return false;
    }
  }
  add(a){
    if(typeof a != "number"){
      if(sameArr(a.shape,this.shape)){
        for(let c=0;c<a.plain.length;c++){
          this.plain[c] = this.plain[c] + a.plain[c];
        }
        this.resetData();
        return this;
      }else{
        console.error("Matricies must match in shape for piecewise addition!");
        return false;
      }
    }else{
      for(let c=0;c<this.plain.length;c++){
        this.plain[c] = this.plain[c] + a;
      }
      this.resetData();
      return this;
    }
  }
  static sub(a,b){
    let outArr = [];
    if(sameArr(a.shape,b.shape)){
      for(let c=0;c<a.plain.length;c++) outArr.push(a.plain[c] - b.plain[c]);
      return new Matrix(outArr,a.shape);
    }else{
      console.error("Matricies must match in shape for piecewise subtaction!");
      return false;
    }
  }
  sub(a){
    if(typeof a != "number"){
      if(sameArr(a.shape,this.shape)){
        for(let c=0;c<a.plain.length;c++){
          this.plain[c] = this.plain[c] - a.plain[c];
        }
        this.resetData();
        return this;
      }else{
        console.error("Matricies must match in shape for piecewise subtraction!");
        return false;
      }
    }else{
      for(let c=0;c<this.plain.length;c++){
        this.plain[c] = this.plain[c] - a;
      }
      this.resetData();
      return this;
    }
  }
  static mul(a,b){
    let outArr = [];
    if(sameArr(a.shape,b.shape)){
      for(let c=0;c<a.plain.length;c++) outArr.push(a.plain[c] * b.plain[c]);
      return new Matrix(outArr,a.shape);
    }else{
      console.error("Matricies must match in shape for piecewise multiplication!");
      return false;
    }
  }
  mul(a){
    if(typeof a != "number"){
      if(sameArr(a.shape,this.shape)){
        for(let c=0;c<a.plain.length;c++){
          this.plain[c] = this.plain[c] * a.plain[c];
        }
        this.resetData();
        return this;
      }else{
        console.error("Matricies must match in shape for piecewise multiplication!");
        return false;
      }
    }else{
      for(let c=0;c<this.plain.length;c++){
        this.plain[c] = this.plain[c] * a;
      }
      this.resetData();
      return this;
    }
  }
  static div(a,b){
    let outArr = [];
    if(sameArr(a.shape,b.shape)){
      for(let c=0;c<a.plain.length;c++) outArr.push(a.plain[c] / b.plain[c]);
      return new Matrix(outArr,a.shape);
    }else{
      console.error("Matricies must match in shape for piecewise addition!");
      return false;
    }
  }
  div(a){
    if(typeof a != "number"){
      if(sameArr(a.shape,this.shape)){
        for(let c=0;c<a.plain.length;c++){
          this.plain[c] = this.plain[c] / a.plain[c];
        }
        this.resetData();
        return this;
      }else{
        console.error("Matricies must match in shape for piecewise division!");
        return false;
      }
    }else{
      for(let c=0;c<this.plain.length;c++){
        this.plain[c] = this.plain[c] / a;
      }
      this.resetData();
      return this;
    }

  }
  static pow(a,n){
    let temp = [];
    a.plain.forEach((c,i) => {
      temp.push(Math.pow(c,n));
    });
    return new Matrix(temp,a.shape);
  }
  pow(n){
    this.plain.forEach((c,i) => {
      this.plain[i] = Math.pow(c,n);
    });
    this.resetData();
    return this;
  }
  sqrt(){
    this.plain.forEach((c,i) => {
      this.plain[i] = Math.sqrt(c);
    });
    this.resetData();
    return this;
  }
  exp(){
    this.plain.forEach((c,i) => {
      this.plain[i] = Math.exp(c);
    });
    this.resetData();
    return this;
  }
  ln(){
    this.plain.forEach((c,i) => {
      this.plain[i] = Math.log(c);
    });
    this.resetData();
    return this;
  }
  xrt(n){
    this.plain.forEach((c,i) => {
      this.plain[i] = Math.pow(c,1/n);
    });
    this.resetData();
    return this;
  }
  abs(){
    this.plain.forEach((c,i) => {
      this.plain[i] = Math.abs(c);
    });
    this.resetData();
    return this;
  }
  round(){
    this.plain.forEach((c,i) => {
      this.plain[i] = Math.round(c);
    });
    this.resetData();
    return this;
  }
  // --- Row Reduction Math ---
  addRows(r1,r2,c=1){ // Sets row 2 to c*row 1 plus row 2
    if(this.shape.length == 2){
      if(r1 <= this.shape[0] && r2 <= this.shape[0]){
        if(typeof c == "number"){
          let newRow = Matrix.duplicate(this).getRow(r1);
          let add = Matrix.duplicate(this).getRow(r2);
          let comp = newRow.mul(c).add(add);
          this.setRow(r2,comp);
          return this;
        }else{
          console.error("Constant must be a scalar value!");
          return false;
        }
      }else{
        console.error("Rows lie outside of the matrix dimensions!");
        return false;
      }
    }else{
      console.error("Row scaling only works with 2d matricies!");
      return false;
    }
  }
  subRows(r1,r2,c){ // Sets row 2 to c*row 1 minus row 2
    if(this.shape.length == 2){
      if(r1 <= this.shape[0] && r2 <= this.shape[0]){
        if(typeof c == "number"){
          let newRow = Matrix.duplicate(this).getRow(r1);
          let sub = Matrix.duplicate(this).getRow(r2);
          let comp = newRow.mul(c).sub(sub);
          this.setRow(r2,comp);
          return this;
        }else{
          console.error("Constant must be a scalar value!");
          return false;
        }
      }else{
        console.error("Rows lie outside of the matrix dimensions!");
        return false;
      }
    }else{
      console.error("Row scaling only works with 2d matricies!");
      return false;
    }
  }
  scaleRow(r1,c){ // Scales a row by c
    if(this.shape.length == 2){
      if(r1 <= this.shape[0]){
        let wrkMat = this.getRow(r1);
        wrkMat.mul(c);
        this.setRow(r1,wrkMat);
        return this;
      }else{
        console.error("Row lies outside of the matrix dimensions!");
        return false;
      }
    }else{
      console.error("Row scaling only works with 2d matricies!");
      return false;
    }
  }
  swapRows(r1,r2){ // Swaps two rows
    if(this.shape.length == 2){
      if(r1 <= this.shape[0] && r2 <= this.shape[0]){
        let grab1 = this.getRow(r1);
        let grab2 = this.getRow(r2);
        this.setRow(r1,grab2);
        this.setRow(r2,grab1);
        return this;
      }else{
        console.error("Rows lie outside of the matrix dimensions!");
        return false;
      }
    }else{
      console.error("Row scaling only works with 2d matricies!");
      return false;
    }
  }
  // --- Linear Algebra ---
  static transpose(a){
    if(a.shape.length == 2){
      let outArr = [];
      for(let c=0;c<a.shape[1];c++){ // Run over the rows
        for(let d=0;d<a.shape[0];d++){ // Run over the cols
          outArr.push(a.data[d][c]);
        }
      }
      return new Matrix(outArr,[a.shape[1],a.shape[0]]);
    }else{
      console.error("Transpose currently only works with two-dimensional matricies!");
      return false;
    }
  }
  transpose(){
    if(this.shape.length == 2){
      let outArr = [];
      for(let c=0;c<this.shape[1];c++){ // Run over the rows
        for(let d=0;d<this.shape[0];d++){ // Run over the cols
          outArr.push(this.data[d][c]);
        }
      }
      this.shape.reverse();
      this.resetData(outArr);
      return this;
    }else{
      console.error("Transpose currently only works with two-dimensional matricies!");
      return false;
    }
  }
  static dot(a,b){
    if(a.shape.length == 2 && sameArr(a.shape,b.shape)){
      if(a.shape[0] == 1 || a.shape[1] == 1){
        return Matrix.mul(a,b).sum();
      }else{
        console.error("The dot product only operates on vectors!");
        return false;
      }
    }else{
      console.error("The dot product only works on vectors of the same shape!");
      return false;
    }
  }
  static innerProduct(a,b){
    if(sameArr(a.shape,b.shape)){
        return Matrix.mul(a,b).sum();
    }else{
      console.error("Both matricies need to have the same shape!");
      return false;
    }
  }
  innerProduct(a){
    if(sameArr(a.shape,this.shape)){
        return Matrix.mul(a,this).sum();
    }else{
      console.error("Both matricies need to have the same shape!");
      return false;
    }
  }
  static outerProduct(a,b){
    if(a.shape.length == 2 && b.shape.length == 2 && b.shape.includes(1) && a.shape.includes(1)){
      if(b.shape[1-b.shape.indexOf(1)] == a.shape[1-a.shape.indexOf(1)]){
        let outArr = [];
          for(let aM=0;aM<a.shape[1-a.shape.indexOf(1)];aM++){
            for(let bM=0;bM<b.shape[1-b.shape.indexOf(1)];bM++){
              outArr.push(a.plain[aM] * b.plain[bM]);
            }
          }
          return new Matrix(outArr,[a.shape[1-a.shape.indexOf(1)],b.shape[1-b.shape.indexOf(1)]]);
      }else{
        console.error("Vectors must match in internal dimensions! (Note: I don't check for proper orientation, so make sure they match!)");
        return false;
      }
    }else{
      console.error("Both matricies must be vectors!");
      return false;
    }
  }
  static matMul(a,b){
    if(!(a.shape.includes(1) && b.shape.includes(1))){
      if(a.shape.includes(1) || b.shape.includes(1)){ // If there's a vector
          if(a.shape.includes(1)){
            console.error("Matrix transformations require the transformation matrix called first!");
            return false;
          }else{
            if(b.shape[0] != a.shape[0] && b.shape[1] == a.shape[0]){ // If b rows don't match a rows &&&&&& b columns match a rows
              console.log("Note: vector transposed to be a column vector!");
              Matrix.transpose(b);
            }else if(b.shape[1] != a.shape[0] && b.shape[0] != a.shape[0]){
              //console.error("Matrix and vector parameters must match for matrix transformations!");
              //return false;
            }
          }
      }
      if(a.shape.length == 2 && b.shape.length == 2){
        if(a.shape[0] == b.shape[1] || a.shape[1] == b.shape[0]){
          let tempA;
          let tempB;
          if(a.shape[0] == b.shape[1] && a.shape[1] == b.shape[0]){ // shapes are transposes
            if(a.shape[0] > a.shape[1]){
              tempA = a.shape[0];
              tempB = b.shape[1];
            }else{
              tempA = a.shape[1];
              tempB = b.shape[0];
            }
          }else{
            if(a.shape[0] == b.shape[1]){
              tempA = a.shape[0];
              tempB = b.shape[1];
            }else if(a.shape[1] == b.shape[0]){
              tempA = a.shape[1];
              tempB = b.shape[0];
            }
          }
          let aShape = a.shape[1-a.shape.indexOf(tempA)];
          let bShape = b.shape[1-b.shape.indexOf(tempB)];
          let outArr = [];
          for(let aI=0;aI<aShape;aI++){
            for(let bI=0;bI<bShape;bI++){
              outArr.push(a.getRow(aI).innerProduct(b.getCol(bI)));
            }
          }
          return new Matrix(outArr,[aShape,bShape]);
        }else{
          console.error("Matricies must match in outer dimensions!");
          return false;
        }
      }else{
        console.error("Matricies must be two dimensional!");
        return false;
      }
    }else{
      console.error("Matrix multiplication between two vectors not defined!");
      return false;
    }
  }
  static vecTransform(transMatrix,a){
    return Matrix.matMul(transMatrix,a);
  }
  static trace(a,b){
    if(a.shape.length == 2 && sameArr(a.shape,b.shape)){
      if(a.shape[0] == a.shape[1]){
        let tempMat = mat_identity(this.shape);
        return Matrix.innerProduct(a,b);
      }else{
        console.error("Matricies must be square!");
        return false;
      }
    }else{
      console.error("Matricies must be two dimensional and the same shape!");
      return false;
    }
  }
  trace(){
    if(this.shape.length == 2){
      if(this.shape[0] == this.shape[1]){
        let tempMat = mat_identity(this.shape);
        return this.innerProduct(tempMat);
      }else{
        console.error("Matrix must be square!");
        return false;
      }
    }else{
      console.error("Matrix must be a two-dimensional matrix!");
      return false;
    }
  }
  static det(a){
    if(a.shape.length == 2){
      if(a.shape[0] == a.shape[1]){
        let returnProduct = Matrix.gaussElim(a)[1];
        if(isAMatrix(returnProduct)){
          return returnProduct.product();
        }else{
          return returnProduct.reduce((a,c) => a=a*c);
        }
      }else{
        console.error("Determinant calculations only work with square matricies!");
        return false;
      }
    }else{
      console.error("Determinant calculations only currently work with two-dimensional matricies!");
      return false;
    }
  }
  static gaussElim(a,upDown=true){
    if(a.shape.length == 2 && !a.shape.includes(1)){
      let operationsArray = [];
      let workingMat = Matrix.duplicate(a);
        // --- Do the swapping --- //
        // --- Check for zeros -- //
        // --- If all zeros -- //
        if(sameArr(Matrix.transpose(workingMat).data[0],arr_fixed(workingMat.shape[1],0))){ // If it's all zeros
          console.error("First column of matrix contains all zeros!"); // Only prepared to swap the first column :-(
          return false;
        }else{
          for(let r=0;r<workingMat.shape[0];r++){ // Sort by size
            for(let c=0;c<workingMat.shape[0];c++){ // Compare every element r to every other element c
              if(r != c){ // Don't compare it to itself
                if(workingMat.data[r][0] > workingMat.data[c][0]){
                  workingMat.swapRows(r,c);
                  operationsArray.push(-1);
                }
              }
            }
          }
        }
        // --- Do the reduction --- //
        // Run for every column of matrix but stop when it hits the number of rows (allows for augments for inverse and determinant)
        let checkLength = (workingMat.shape[1]>workingMat.shape[0])?workingMat.shape[0]:workingMat.shape[1]; // Allow for augments
        for(let r=0;r<checkLength;r++){ // Note each iteration will try and make the c,c position = 1, and below zeros.
          if(workingMat.data[r][r] != 1){ // Make the number = 1 (if it isn't already)
            operationsArray.push(workingMat.data[r][r]);
            if(workingMat.data[r][r] != 0) workingMat.scaleRow(r,1/workingMat.data[r][r]);
          }
          for(let b=r+1;b<workingMat.shape[0];b++){ // Make the lower part zero
            if(workingMat.data[b][r] != 0){
              workingMat.addRows(r,b,-1*workingMat.data[b][r]);
            }
          }
        }
        if(upDown){
          for(let r=1;r<checkLength;r++){ // Note each iteration will try and make the c,c position = 1, and above zeros.
            for(let a=r-1;a>=0;a--){ // Make the upper part zero (representing the rows)
              if(workingMat.data[a][r] != 0){
                workingMat.addRows(r,a,-1*workingMat.data[a][r]);
              }
            }
          }
        }
        if(operationsArray.length > 1){
          return [workingMat,new Matrix(operationsArray)];
        }else{
          console.log("Note: gaussian elimination didn't require any more than one swap or scale!");
          return [workingMat,operationsArray];
        }
    }else{
      console.error("Gaussian elimination only works on two-dimensional matricies!");
      return false;
    }
  }
  static invert(a){
    if(a.shape.length == 2){
      if(a.shape[0] == a.shape[1]){
        if(Matrix.det(a) != 0){
          return Matrix.gaussElim(Matrix.matFromMatsByCol(a,mat_identity(a.shape)))[0].splitByCol(a.shape[1]);
        }else{
          console.error("Matrix is not invertible!");
          return false;
        }
      }else{
        console.error("Inversion only works on square matricies!");
        return false;
      }
    }else{
      console.error("Inverting only works on two-dimensional matricies!");
      return false;
    }
  }
  // --- Trigonometry ---
  radToDeg(){
    this.mul(180).div(Math.PI);
    return this;
  }
  degToRad(){
    this.mul(Math.PI).div(180);
    return this;
  }
  static sin(a){
    return Matrix.duplicate(a).sin();
  }
  sin(){
    this.plain.forEach((c,i) => {
      this.plain[i] = Math.sin(c);
    });
    this.resetData();
    return this;
  }
  static cos(a){
    return Matrix.duplicate(a).cos();
  }
  cos(){
    this.plain.forEach((c,i) => {
      this.plain[i] = Math.cos(c);
    });
    this.resetData();
    return this;
  }
  static tan(a){
    return Matrix.duplicate(a).tan();
  }
  tan(){
    this.plain.forEach((c,i) => {
      this.plain[i] = Math.tan(c);
    });
    this.resetData();
    return this;
  }
  static asin(a){
    return Matrix.duplicate(a).asin();
  }
  asin(){
    this.plain.forEach((c,i) => {
      this.plain[i] = Math.asin(c);
    });
    this.resetData();
    return this;
  }
  static acos(a){
    return Matrix.duplicate(a).acos();
  }
  acos(){
    this.plain.forEach((c,i) => {
      this.plain[i] = Math.acos(c);
    });
    this.resetData();
    return this;
  }
  static atan(a){
    return Matrix.duplicate(a).atan();
  }
  atan(){
    this.plain.forEach((c,i) => {
      this.plain[i] = Math.atan(c);
    });
    this.resetData();
    return this;
  }
}
class Vector extends Matrix{
  constructor(data,rc = "row"){
      let shape = [1,data.length];
      if(rc == "col"){
        shape = [data.length,1];
      }
      super(data,shape);
  }
  norm(){
    return Math.sqrt(Matrix.pow(this,2).sum());
  }
  dot(a){
    if(sameArr(this.shape,a.shape)){
      return Matrix.mul(this,a).sum();
    }else{
      console.error("Determinant requires matching shapes!");
      return false;
    }
  }
  static cross(a,b){
    if(sameArr(a.shape,b.shape)){
      if(a.shape.includes(3)){
        let outData = [
                      a.plain[1]*b.plain[2]-a.plain[2]*b.plain[1],
                      -(a.plain[0]*b.plain[2]-a.plain[2]*b.plain[0]),
                      a.plain[0]*b.plain[1]-a.plain[1]*b.plain[0]
                    ];
        return new Vector(outData);
      }else{
        console.error("Vectors must be three dimensional!");
        return false;
      }
    }else{
      console.error("Vectors must be the same shape!");
      return false;
    }
  }
  normalize(){
    return this.div(this.norm());
  }
  setLen(len){
    return this.normalize().mul(len);
  }
  static angleBetween(a,b,degrees=false){
    if(degrees) return Math.acos(Vector.dot(a,b)/(a.norm()*b.norm())) * (180/Math.PI);
    else return Math.acos(Vector.dot(a,b)/(a.norm()*b.norm()));
  }
  static orthoProject(vec,...args){
    let wrkVec = mat_fixed(args[0].shape,0);
    args.forEach((c,i) => {
      wrkVec.add(c.mul(Matrix.innerProduct(vec,c)/(Math.pow(c.norm(),2))));
    });
    return new Vector(wrkVec.plain);
  }
}
const sameArr = (a,b) => {
  if(a.length != b.length) return false;
  for(let c=0;c<a.length;c++) if(a[c] != b[c]) return false;
  return true;
}
const isAMatrix = a => {
  if(!(a.shape === undefined) && !(a.data === undefined) && !(a.plain === undefined)) return true;
  else return false;
}
const flattenArr = (arr,shape) => {
  let outArr = [];
    if(shape.length == 1){
      for(let i1=0;i1<shape[0];i1++){
        outArr.push(arr[i1]);
      }
    }else if(shape.length == 2){
      for(let i1=0;i1<shape[0];i1++){
        for(let i2=0;i2<shape[1];i2++){
          outArr.push(arr[i1][i2]);
        }
      }
    }else if(shape.length == 3){
      for(let i1=0;i1<shape[0];i1++){
        for(let i2=0;i2<shape[1];i2++){
          for(let i3=0;i3<shape[2];i3++){
            outArr.push(arr[i1][i2][i3]);
          }
        }
      }
    }else if(shape.length == 4){
      for(let i1=0;i1<shape[0];i1++){
        for(let i2=0;i2<shape[1];i2++){
          for(let i3=0;i3<shape[2];i3++){
            for(let i4=0;i4<shape[3];i4++){
              outArr.push(arr[i1][i2][i3][i4]);
            }
          }
        }
      }
    }else if(shape.length == 5){
      for(let i1=0;i1<shape[0];i1++){
        for(let i2=0;i2<shape[1];i2++){
          for(let i3=0;i3<shape[2];i3++){
            for(let i4=0;i4<shape[3];i4++){
              for(let i5=0;i5<shape[4];i5++){
                outArr.push(arr[i1][i2][i3][i4][i5]);
              }
            }
          }
        }
      }
    }else if(shape.length == 6){
      for(let i1=0;i1<shape[0];i1++){
        for(let i2=0;i2<shape[1];i2++){
          for(let i3=0;i3<shape[2];i3++){
            for(let i4=0;i4<shape[3];i4++){
              for(let i5=0;i5<shape[4];i5++){
                for(let i6=0;i6<shape[5];i6++){
                  outArr.push(arr[i1][i2][i3][i4][i5][i6]);
                }
              }
            }
          }
        }
      }
    }
    return outArr;
}


const mat_identity = shape => {
  if(shape[0] === undefined || typeof shape == "string"){
      console.error("mat_identity requires an array for shape of matrix!");
      return false;
  }else{
    if(shape.length != 2){
      console.error("mat_identity requires a 2 dimensional matrix shape!");
      return false;
    }else{
      if(shape[0] != shape[1]){
        console.error("mat_identity requres a square matrix shape!");
        return false;
      }else{
        let outArr = [];
        for(let i=0;i<shape[0]*shape[1];i++){
          if(i%(shape[0]+1) == 0) outArr.push(1);
          else outArr.push(0);
        }
        return new Matrix(outArr,shape);
      }
    }
  }
}

const arr_seq = (i,e) => {
  let outputArr = [];
  for(let c=i;c<e;c++) outputArr.push(c);
  return outputArr;
}
const mat_seq = (shape,i,e) => new Matrix(arr_seq(i,e),shape);

const arr_ones = n => {
  let outputArr = [];
  for(let c=0;c<n;c++) outputArr.push(1);
  return outputArr;
}
const mat_ones = shape => new Matrix(arr_ones(shape.reduce((a,c) => a=a*c)),shape);

const arr_fixed = (n,val) => {
  let outputArr = [];
  for(let c=0;c<n;c++) outputArr.push(val);
  return outputArr;
}
const mat_fixed = (shape,val) => new Matrix(arr_fixed(shape.reduce((a,c) => a=a*c),val),shape);

const arr_rand = (n,min=0,max=1) => {
  let outputArr = [];
  for(let c=0;c<n;c++) outputArr.push(Math.random()*max + min);
  return outputArr;
}
const mat_rand = (shape,min=0,max=1) => new Matrix(arr_rand(shape.reduce((a,c) => a=a*c),min,max),shape);
