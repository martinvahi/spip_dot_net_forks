//=========================================================================
// Copyright (c) 2011, martin.vahi@softf1.com that has an
// Estonian personal identification code of 38108050020.
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or
// without modification, are permitted provided that the following
// conditions are met:
//
// * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
// * Redistributions in binary form must reproduce the above copyright
// notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
// * Neither the name of the Martin Vahi nor the names of its
// contributors may be used to endorse or promote products derived
// from this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND
// CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES,
// INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
// MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
// DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR
// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
// BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
// SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
// WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
// NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//=========================================================================

/*
 var softf1_com_spip_ob_opmem = {};

 function softf1_com_spip_constructor() {
 //-----------------
 softf1_com_spip_ob_opmem.i_canvas_width = 42;
 softf1_com_spip_ob_opmem.i_canvas_height = 42;
 softf1_com_spip_ob_opmem.i_width_max = Math.floor(screen.width * 0.98);
 softf1_com_spip_ob_opmem.i_height_max = Math.floor(screen.height * 0.98);
 } // softf1_com_spip_constructor

 function softf1_com_spip_set_style(ob_dom_element, s_CSS) {
 ob_dom_element.setAttribute('style', s_CSS);
 } // softf1_com_spip_set_style

 function softf1_com_spip_resize_canvas(ob_dom_element) {
 if (softf1_com_spip_ob_opmem.i_height_max < softf1_com_spip_ob_opmem.i_canvas_height) {
 softf1_com_spip_ob_opmem.i_canvas_height = softf1_com_spip_ob_opmem.i_height_max;
 softf1_com_spip_ob_opmem.i_canvas_width = Math.floor(softf1_com_spip_ob_opmem.i_canvas_height *
 ((1000 * 1.0) / 700));
 } // if
 if (softf1_com_spip_ob_opmem.i_width_max < softf1_com_spip_ob_opmem.i_canvas_width) {
 softf1_com_spip_ob_opmem.i_canvas_width = softf1_com_spip_ob_opmem.i_width_max;
 softf1_com_spip_ob_opmem.i_canvas_height = Math.floor(softf1_com_spip_ob_opmem.i_canvas_width *
 ((700 * 1.0) / 1000));
 } // if
 } // softf1_com_spip_resize_canvas
 */

function softf1_com_spip_resize_images_t1() {
    //var ar_imgs = document.getElementsByClassName('spip_documents');
    var i_width_max = Math.floor(screen.width * 0.90);
    var i_height_max = Math.floor(screen.height * 0.90);
    var ar_imgs = document.getElementsByTagName('img');
    var i_len = ar_imgs.length;
    var i = 0;
    var ob_dom_elem;
    var s_lc_CSS = 'max-height=200px; ';
    for (i = 0; i < i_len; i++) {
        ob_dom_elem = ar_imgs[i];
        ob_dom_elem.setAttribute('height', "90px");
    } // for
    //document.write('tervitusi!');
} // softf1_com_spip_resize_images_t1


window.onload = function () {
    //softf1_com_spip_constructor();
    softf1_com_spip_resize_images_t1();
} // window.onload

// window.onbeforeunload = function () {}

//=========================================================================
 
