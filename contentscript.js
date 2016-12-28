var acc, i = 0;
var remover = {
    init: function () {
        alert("This process may take some time.\nThis tab will become unusable while processing.\nIf the page stops loading new followers, simply reload and input the script again.");
        remover.loadAccounts();
    },
    loadAccounts: function () {
        acc = [];
        $('.ProfileCard-bg').each(function () {
            acc.push($(this).parent());
        });
        remover.checkAccounts();
    },
    checkAccounts: function () {
        i = 0;
        acc.forEach(function (profile) {
            i++;
            var w = 0;
            if ($(profile).find('.ProfileCard-bio').text().length < 15) {w++;}
            if ($(profile).find('.ProfileCard-avatarImage').attr('src').indexOf("default_profile_images/default_profile") >= 0) {w=w+2;}
            if ($(profile).find('.ProfileCard-bg').css('background-image') == "none") {w=w+2;}
            if ($(profile).find('.ProfileNameTruncated-link').text().match('[^\x00-\x7F]+')) {w++;}

            if (w > 2) {
                if (($('.alert-messages .hidden'))) { $('.alert-messages').remove(); }
                $(profile).find('.user-dropdown').trigger('click');
                $(profile).find('.block-text').find('.dropdown-link').trigger('click');
                $('.block-button').trigger('click');
            }

            if(i == acc.length){ remover.flushAccounts(); }
        });
    },
    flushAccounts: function () {
        if($('.has-more-items')){
            $('html, body').animate({scrollTop: 0}, "slow", function () {
                $('.u-lg-size1of3').remove();
            }).animate({scrollTop: $(document).height()}, "slow", function () {
                remover.loadAccounts();
            });
        }else{
            alert('Done');
        }
    }
}
remover.init();
