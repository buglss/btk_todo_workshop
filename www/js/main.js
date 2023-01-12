(function() {
    $(function() {
        $("#complete-btn").click(function(e) {
            let id = $(this).data("id")
            $.post(`/complete/${id}`, {  }, function(res) {
                window.location.reload()
            })
        })

        $("#reopen-btn").click(function(e) {
            let id = $(this).data("id")
            $.post(`/reopen/${id}`, {  }, function(res) {
                window.location.reload()
            })
        })

        $("#trash-btn").click(function(e) {
            let id = $(this).data("id")
            $.post(`/trash/${id}`, {  }, function(res) {
                window.location.reload()
            })
        })
    });
})()