/**
 * @param {string[]} req_skills
 * @param {string[][]} people
 * @return {number[]}
 */
var smallestSufficientTeam = function(req_skills, people) {
    let n = req_skills.length;
    let nSkills = 1 << n;
    let skillToId = {};
    // dp[i] := min people's indices to cover skillset of mask i
    let dp = new Array(nSkills);
    dp[0] = [];

    for (let i = 0; i < req_skills.length; i++){
        skillToId[req_skills[i]] = i;
    }

    for (let i = 0; i < people.length; i++){
        let currSkill = getSkill(people[i], skillToId);
        for (let j = 0; j < nSkills; j++){
            if (dp[j] === undefined) continue;
            let newSkillSet = currSkill | j;
            if (newSkillSet === j) continue; // Adding people[i] doesn't increase skill set
            if (dp[newSkillSet] === undefined || dp[newSkillSet].length > dp[j].length + 1){
                dp[newSkillSet] = [...dp[j]];
                dp[newSkillSet].push(i);
            }
        }
    }

    return dp[nSkills - 1];
};

function getSkill(person, skillToId){
    let mask = 0;
    for (let skill of person){
        if (skillToId.hasOwnProperty(skill))
            mask |= 1 << skillToId[skill];
    }
    return mask;
}