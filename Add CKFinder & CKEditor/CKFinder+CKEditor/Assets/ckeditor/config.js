/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
    config.language = 'en';
    config.filebrownserBrownserUrl = "/Assets/ckfinder/ckfinder.html";
    config.filebrownserImageUrl = "/Assets/ckfinder/ckfinder.html?type=Images";
    config.filebrownserFlashUrl = "/Assets/ckfinder/ckfinder.html?type=Flash";
    config.filebrownserUploadUrl = "/Assets/ckfinder/core/connector/aspx/connector.aspx?command=QuickUpload&type=Files";
    config.filebrownserImageUploadrUrl = "/Assets/ckfinder/core/connector/aspx/connector.aspx?command=QuickUpload&type=Images";
    config.filebrownserFlashUploadUrl = "/Assets/ckfinder/core/connector/aspx/connector.aspx?command=QuickUpload&type=Flash";

    CKFinder.setupCKEditor(null, '/ckfinder/');

};
