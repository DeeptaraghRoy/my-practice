package com.des.main;

import com.des.phone.Android;
import com.des.phone.OS;
import com.des.phone.OperatingSystemFactory;
import com.des.phone.Windows;

public class FactoryMain {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		/* ------ Without using Factory Design Pattern ------ */
		/*OS obj = new Windows();
		obj.spec();
		OS obj2 = new Android();
		obj2.spec();*/
		
		/* ------ By using Factory Design Pattern ------ */
		OperatingSystemFactory osf = new OperatingSystemFactory();
		OS obj = osf.getInstance("efwfw");
		obj.spec();
		/*OS obj2 = osf.getInstance("Open");
		obj2.spec();*/

	}

}
