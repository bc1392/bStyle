// Define & alias main object.
const bstyle = {

    // Initialization (Sets everything up).
    init: function() {

        // Theme setup.
        if ( bs.theme.get() == 'none' ) { bs.theme.light() }

        // Modals triggers.


    },

    // Theme changing (Toggle mode, go dark, go light, get mode).
    theme: {
        toggle: function() { $('body').toggleClass('dark'); $('body').toggleClass('light') },
        dark:   function() { $('body').removeClass('light'); $('body').addClass('dark') },
        light:  function() { $('body').removeClass('dark'); $('body').addClass('light') },
        get:    function() { if ($('body').hasClass('light')) {return 'light'} else if ($('body').hasClass('dark')) {return 'dark'} else {return 'none'} }
    },

    // Modals (Get object, check state, show, hide).
    modal: {
        get:   function(id) { return $(`div.modal#${id}`) },
        check: function(id) { if (bs.modal.get(id).hasClass('show-modal')) {return 'shown'} else {return 'hidden'} },
        show:  function(id) { bs.modal.get(id).addClass('show-modal') },
        hide:  function(id) { bs.modal.get(id).removeClass('show-modal') }
    }

}; const bs = bstyle

// Run initialization.
bs.init()