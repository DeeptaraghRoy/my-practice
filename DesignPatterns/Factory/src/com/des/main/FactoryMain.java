package com.des.main;

import com.des.phone.OS;
import com.des.phone.OperatingSystemFactory;

public class FactoryMain {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		OperatingSystemFactory osf = new OperatingSystemFactory();
		OS obj = osf.getInstance("efwfw");
		obj.spec();

	}

}
