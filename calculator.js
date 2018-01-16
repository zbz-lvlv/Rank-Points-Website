let NUMBER_OF_SUBJECTS = 6;
let NUMBER_OF_GRADES = 7;
let multiplierForEachSubject = [1, 1, 2, 2, 2, 1]; //H1 is 1 times, H2 is two times
var selectedGradeForEachSubject = ["U", "U", "U", "U", "U", "U"];

function buttonGradeClicked(id){
	
	document.getElementById(id).style.backgroundColor = '#1F3A93';
	document.getElementById(id).style.color = '#F9FCFF';
	
	//ID consists of subject_no-grade_selected. Eg. 0-A is the A button for the 0th subject.
	var idSplit = id.split("-");
	var subjectNumber = parseInt(idSplit[0]);
	var subjectGrade = idSplit[1];
	
	//Uncheck all other buttons
	uncheckAllButtonsInSubject(subjectNumber, subjectGrade);
	
	//Add to array
	selectedGradeForEachSubject[subjectNumber] = subjectGrade;
	
	//Calculate Rank Points
	var totalRankPoints = 0.0;
	for(var i = 0; i < NUMBER_OF_SUBJECTS; i++){
		totalRankPoints += multiplierForEachSubject[i] * letterGradeToRankPoints(selectedGradeForEachSubject[i]);
	}
	
	//Display rank points
	document.getElementById("rank_points_value").innerHTML = totalRankPoints;
	
}

function uncheckAllButtonsInSubject(subject, subjectGrade){
	
	for(var i = 0; i < NUMBER_OF_GRADES; i++){
		
		if(i == letterToNumericalGrade(subjectGrade)){
			continue;
		}
		
		var id = subject + "-" + numericalToLetterGrade(i);
		
		document.getElementById(id).style.backgroundColor = '#F9FCFF';
		document.getElementById(id).style.color = '#1F3A93';
	}
	
}

function numericalToLetterGrade(number){
	
	switch(number) {
    case 0:
        return "A";
    case 1:
        return "B";
	case 2:
        return "C";
    case 3:
        return "D";
	case 4:
        return "E";
    case 5:
        return "S";
	case 6:
        return "U";
    default:
        return "Z";
	}
	
}

function letterToNumericalGrade(letter){
	
	switch(letter) {
    case "A":
        return 0;
    case "B":
        return 1;
	case "C":
        return 2;
    case "D":
        return 3;
	case "E":
        return 4;
    case "S":
        return 5;
	case "U":
        return 6;
    default:
        return -1;
	}
	
}

function letterGradeToRankPoints(letter){
	
	switch(letter) {
    case "A":
        return 10.0;
    case "B":
        return 8.75;
	case "C":
        return 7.5;
    case "D":
        return 6.25;
	case "E":
        return 5.0;
    case "S":
        return 2.5;
	case "U":
        return 0.0;
    default:
        return -1;
	}
	
}