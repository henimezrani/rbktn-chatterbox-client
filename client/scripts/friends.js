var friendsList = [];
var Friends = {

	toggleStatus: function(node){
		friendsList.push(node.innerHTML);
		friendsList = _.uniq(friendsList);
		var chatsList = $('.username')
		for (var i = 0 ; i < chatsList.length ; i++) {
			if (chatsList[i].innerHTML === node.innerHTML){
				$(chatsList[i]).addClass('friend')
			}

			// if (friendsList.includes(chatsList[i][0].innerHTML)){
			// 	console.log('hi');
			// 	chatsList[i].attr('class', 'friend');
			// }
		}



		return true
	}


};