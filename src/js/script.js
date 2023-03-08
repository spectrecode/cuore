function miCalendario(){
    var calendarEl = document.getElementById('calendar');
      
        var calendar = new FullCalendar.Calendar(calendarEl, {
            height:'70%',
            locale: 'es',
            firstDay:1,
            // height:'300',
            headerToolbar: {
                right: "prev,next"
            },
            events: [
                {
                id: 'a',
                title: 'Torneo Padeleando',
                start: '2023-03-05'
                },
                {
                id: 'b',
                title: 'Sunset Padel',
                start: '2023-03-05'
                },
                {
                id: 'c',
                title: 'my event C',
                start: '2023-03-06'
                },
                {
                id: 'd',
                title: 'my event D',
                start: '2023-03-06'
                },
            ]
        });
      
        calendar.render();
}

  $(".buscador .calendar").click(function(){
    $(".proximos_torneos").hide()
    // miCalendario()
    $(".calendario").show()
    miCalendario()
  })