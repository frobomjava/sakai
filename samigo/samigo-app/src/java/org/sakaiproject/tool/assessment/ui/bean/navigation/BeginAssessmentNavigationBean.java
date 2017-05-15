package org.sakaiproject.tool.assessment.ui.bean.navigation;

import java.io.IOException;
import java.io.Serializable;
import java.net.URLEncoder;
import java.util.Map;

import javax.faces.context.ExternalContext;
import javax.faces.context.FacesContext;

public class BeginAssessmentNavigationBean implements Serializable {

	private String getView() {
		String viewId = "../delivery/beginTakingAssessment.jsf"; // or look
																	// this up
																	// somewhere
		return viewId;
	}

	/**
	 * Regular link to page
	 */
	public String getUrlLink() {
		FacesContext context = FacesContext.getCurrentInstance();
		ExternalContext extContext = context.getExternalContext();
		String viewId = getView();
		String navUrl = context.getExternalContext().encodeActionURL(extContext.getRequestContextPath() + viewId);
		return navUrl;
	}

	/**
	 * Just some value
	 */
	public String getValue() {
		return "" + System.currentTimeMillis();
	}

	/**
	 * Invoked by action
	 */
	public String invokeRedirect() {
		FacesContext context = FacesContext.getCurrentInstance();
		ExternalContext extContext = context.getExternalContext();
		String viewId = getView();
		Map<String, String> params = FacesContext.getCurrentInstance().getExternalContext().getRequestParameterMap();
		String publishedId = params.get("publishedId");
		String actionString = params.get("actionString");
		try {
			String charEncoding = extContext.getRequestCharacterEncoding();
			String keyPublishedId = URLEncoder.encode("publishedId", charEncoding);
			String valuePublishedId = URLEncoder.encode(publishedId, charEncoding);
			viewId = extContext.getRequestContextPath() + viewId + '?' + keyPublishedId + "=" + valuePublishedId;
			String urlLink = context.getExternalContext().encodeActionURL(viewId);
			extContext.redirect(getView()+ '?' + keyPublishedId + "=" + valuePublishedId);
		} catch (IOException e) {
			extContext.log(getClass().getName() + ".invokeRedirect", e);
		}
		return null;
	}
	

}