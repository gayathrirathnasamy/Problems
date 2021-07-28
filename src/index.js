//Balanced Paranthesis
const formParanthesis = (str, pos, n, open, close, tempArr) => {
  if (n > 0) {
    if (close === n) {
      tempArr.push(str.join(""));
    } else {
      if (open > close) {
        str[pos] = ")";
        formParanthesis(str, pos + 1, n, open, close + 1, tempArr);
      }
      if (open < n) {
        str[pos] = "(";
        formParanthesis(str, pos + 1, n, open + 1, close, tempArr);
      }
    }
    return tempArr;
  }
};

const n = 3;
let str = new Array(2 * n);
//console.log(formParanthesis(str,0,n,0,0,[]));

//Sum of subset of array Dynamic Programming
const subsetSum = (arr, sum) => {
  const balanceMap = {};
  const arraySub = [];
  for (let i = 0; i < arr.length; i++) {
    if (balanceMap[arr[i]] !== undefined) {
      arraySub.push([arr[i], arr[balanceMap[arr[i]]]]);
    } else {
      balanceMap[sum - arr[i]] = i;
    }
  }
  return arraySub;
};

//console.log(subsetSum([1,4,2,3,5],5));

//Longest Common subsequence
const lcs = (s1, s2, s1Len, s2Len) => {
  if (s1Len === 0 || s2Len === 0) return 0;
  if (s1[s1Len - 1] === s2[s2Len - 1]) {
    return 1 + lcs(s1, s2, s1Len - 1, s2Len - 1);
  } else {
    return Math.max(
      lcs(s1, s2, s1Len, s2Len - 1),
      lcs(s1, s2, s1Len - 1, s2Len)
    );
  }
};

console.log(lcs("ABCDGH", "AEDFHR", 6, 6));
