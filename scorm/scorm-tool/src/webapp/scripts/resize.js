/*
 * #%L
 * SCORM Tool
 * %%
 * Copyright (C) 2007 - 2016 Sakai Project
 * %%
 * Licensed under the Educational Community License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *             http://opensource.org/licenses/ecl2
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * #L%
 */
function initResizing() {
	onResize();
}

function onResize() {
	if (document.getElementById("scormContent")) {
		var windowHeight = getInnerHeight();
		//var headerHeight = document.getElementById("scormButtonPanel").offsetHeight;
		var headerHeight = 0;
		//var footerHeight = document.getElementById("scormFooter").offsetHeight;
		var footerHeight = 0;
		var mainHeight = windowHeight - (headerHeight + footerHeight) -4;
		
		var windowWidth = getInnerWidth();
		var navWidth = document.getElementById("scormNavPanel").offsetWidth;
		var mainWidth = windowWidth - navWidth - 80;
	
		var scormHeight = mainHeight - 10;
		if (mainWidth < 440 && navigator.userAgent.search("Firefox") >= 0) {
			document.getElementById( "scormNavPanel" ).style.height = (scormHeight - 50) + "px";
			document.getElementById("scormContent").style.height = (scormHeight - 50) +"px";
		} else {
			document.getElementById( "scormNavPanel" ).style.height = scormHeight + "px";
			document.getElementById("scormContent").style.height = scormHeight +"px";
		}
		document.getElementById("scormContent").style.width = mainWidth + "px";

		document.getElementById( "scormNavPanel" ).style.paddingBottom = "20px";
	}
}

function getInnerHeight() {
	var innerHeight = 0;
	if( typeof( window.innerHeight ) == 'number' ) {
		//Non-IE
		innerHeight = window.innerHeight;
	} else if( document.documentElement && document.documentElement.clientHeight ) {
		//IE 6+ in 'standards compliant mode'
		innerHeight = document.documentElement.clientHeight;
	} else if( document.body && document.body.clientHeight ) {
		//IE 4 compatible
		innerHeight = document.body.clientHeight;
	}
	return innerHeight;
}

function getInnerWidth() {
	var innerWidth = 0;
	if( typeof( window.innerWidth ) == 'number' ) {
		//Non-IE
		innerWidth = window.innerWidth;
	} else if( document.documentElement && document.documentElement.clientWidth ) {
		//IE 6+ in 'standards compliant mode'
		innerWidth = document.documentElement.clientWidth;
	} else if( document.body && document.body.clientWidth ) {
		//IE 4 compatible
		innerWidth = document.body.clientWidth;
	}
	return innerWidth;
}