module.exports = function(robot) {

	// robot.hear() will have the robot listen in on any channel it's in
	robot.hear(/Aloha/i, function(response) {
		response.send("Aloha")
	})

	robot.hear(/Tommy/i, function(response) {
		response.send("Tommy likey, Tommy want wingy!")
	})

	robot.hear(/Brothers/i, function(response) {
		response.send("Brothers don't shake hands, brothers gotta hug!'")
	})

	robot.hear(/Richard/i, function(response) {
		response.send("I can actually hear you getting fatter")
	})

	robot.hear(/i want (.+)/i, function(response) {
		var want = response.match[1]
		// response.reply() will have the robot at-mention you when it responds
		response.reply('I also want ' + want)
	})

	// robot.respond() means the robot will only reply when at-mentioned or DMed
	robot.respond(/Who loves their slackbot\?/i, function(response) {
		var user = robot.brain.userForName('aroemig')
		response.reply( user.real_name + ' loves his slackbot' + '!')
	})

if 
	robot.hear(/Saturday/i, function(response) {
		response.send("PARTY!")
		}) { 
} else if robot.hear(/Sunday/i, function(response) {
		response.send("SundayFunDay")
}) else 
	robot.hear(/Monday, Tuesday, Wednesday, Thursday/i, function(response) { 
			response.send("FML")
})


}
