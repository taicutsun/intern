function checkExam(correct, student) {
    let score = 0;
    for (let i = 0; i < correct.length; i++) {
      if (student[i] === correct[i]) score += 4; 
      else if (student[i] === "")  score += 0; 
      else  score -= 1;
    }
    return score < 0 ? 0 : score;
  }