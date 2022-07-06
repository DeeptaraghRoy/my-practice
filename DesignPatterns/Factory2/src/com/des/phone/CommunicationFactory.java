package com.des.phone;

public class CommunicationFactory {
	public Communication getProcess(String modeOfComm) {
		if(modeOfComm.equalsIgnoreCase("Email"))
			return new EmailCommunication();
		else if(modeOfComm.equalsIgnoreCase("mobile"))
			return new MobileCommunication();
		else
			return null;
	}

}
