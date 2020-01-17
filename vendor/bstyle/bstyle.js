// Define & alias main object.
const bstyle = {

    // Initialization (Sets everything up).
    init: function() {

        // Theme setup.
        if ( bs.theme.get() == 'none' ) { bs.theme.light() }

        // Modal setup.
        $('div.modal:not(.shown)').hide()
        $('a[data-trigger="modal"]').click(function(){
            const target = $(this).data('target'); const action = $(this).data('action')
            switch(action) {
                case 'show': bs.modal.show(target); break; case 'hide': bs.modal.hide(target); break
                case 'toggle': bs.modal.toggle(target); break; default: bs.modal.show(target)
            }
        })

    },

    // Theme changing (Toggle mode, go dark, go light, get mode).
    theme: {
        toggle: function() { $('body').toggleClass('dark'); $('body').toggleClass('light') },
        dark:   function() { $('body').removeClass('light'); $('body').addClass('dark') },
        light:  function() { $('body').removeClass('dark'); $('body').addClass('light') },
        get:    function() { if ($('body').hasClass('light')) {return 'light'} else if ($('body').hasClass('dark')) {return 'dark'} else {return 'none'} }
    },

    // Modals (Get object, check state, show, hide, toggle).
    modal: {
        get:   function(id) { return $(`div.modal#${id}`) },
        check: function(id) { if (bs.modal.get(id).hasClass('shown')) {return 'shown'} else {return 'hidden'} },
        show:  function(id) { bs.modal.get(id).fadeIn().addClass('shown') },
        hide:  function(id) { bs.modal.get(id).fadeOut().removeClass('shown') },
        toggle:function(id) { if (bs.modal.check(id) == 'shown') { bs.modal.hide(id) } else { bs.modal.show(id) } }
    }

}; const bs = bstyle

// Run initialization.
bs.init()