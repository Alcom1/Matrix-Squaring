var Matrix = function()
{
    this.mat = [
        [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0],
        [0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0],
        [0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0],
        [0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0]];
}

Matrix.prototype.setMat = function(mat)
{
    this.mat = mat;
}

Matrix.prototype.getMult = function(matr)
{
    var newMat = [];
    for(var j = 0; j < matr.mat.length; j++)
    {
        newMat.push([]);
        for(var i = 0; i < matr.mat[0].length; i++)
        {
            newMat[j].push(0);
            var temp = 0;
            for(var k = 0; k < matr.mat.length; k++)
            {
                temp += this.mat[j][k] * matr.mat[i][k];
            }
            newMat[j][i] = temp;
        }
    }
    var newMatrix = new Matrix();
    newMatrix.setMat(newMat);
    return newMatrix;
}

Matrix.prototype.log = function()
{
    for(var j = 0; j < this.mat.length; j++)
    {
        var rowLog = "";
        for(var i = 0; i < this.mat[j].length; i++)
        {
            rowLog += this.mat[j][i] + "  ";
        }
        console.log(rowLog);
    }
}