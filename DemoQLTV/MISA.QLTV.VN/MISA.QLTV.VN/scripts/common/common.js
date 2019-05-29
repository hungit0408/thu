$(document).ready(function () {
    $('.dropdown-trigger').on('mouseover', function () {
        $(this).children('.dropdown-content').show();
    });
    $('.dropdown-trigger').on('mouseleave', function () {
        $(this).children('.dropdown-content').hide();
    });
});

class Menu {

    constructor() {

    }


    //adasdad
     //created by XXX(24/05/2019
    //showMenu() {

    //    $('.lbsetting').mouseleave(function () {

    //        $(this).children('.hide-header-menu').hide();
    //    });

    //    $('.lbsetting').mouseover(function () {

    //        $(this).children('.hide-header-menu').show();
    //    });
    //}

    //showluuthong() {



    //    $('.lbcirculate').mouseleave(function () {

    //        $(this).children('.hide-header-menu-circulate1').hide();


    //    });

    //    $('.lbcirculate').mouseover(function () {

    //        $(this).children('.hide-header-menu-circulate1').show();


    //    });

    //}
    //showdanhmuc() {



    //    $('.danhmuc').mouseleave(function () {

    //        $(this).children('.hide-header-menu').hide();


    //    });

    //    $('.danhmuc').mouseover(function () {

    //        $(this).children('.hide-header-menu').show();


    //    });

    //}
    //showbook() {

    //    $('.lbnewspaper').mouseleave(function () {

    //        $(this).children('.hide-header-menu').hide();
    //    });

    //    $('.lbnewspaper').mouseover(function () {

    //        $(this).children('.hide-header-menu').show();
    //    });
    //}
    //showtapchi() {

    //    $('.lbbook').mouseleave(function () {

    //        $(this).children('.hide-header-menu-book').hide();
    //    });

    //    $('.lbbook').mouseover(function () {

    //        $(this).children('.hide-header-menu-book').show();
    //    });
    //}


}

var menu = new Menu();


