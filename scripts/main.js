newScript()
    .dialog('start', function(session, response) {
        response
            .createButtons()
            .text(`Hello ${session.user.state.name}, what do you want to do?`)
            .addButton('postback', 'Photo of the day', 'POTD')
            .addButton('postback', 'Space trivia', 'TRIVIA')
            .send();
    })
    .expect
        .text((session, response) => {
            response.sendText('Please click a button');
            response.goto('start');
        })
        .button('POTD', (session, response) => {
            response.startScript('POTD');
        })
        .button('TRIVIA', (session, response) => {
            response.startScript('TRIVIA');
        })