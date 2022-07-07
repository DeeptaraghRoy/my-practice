package com.des.phone;

public class Shop {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		/* ------ Without using Builder Design Pattern ------ */
		/*Phone p = new Phone("Android", 2, "Qualcomm", 5.5, 3);
		System.out.println(p);*/
		
		/* ------ By using Builder Design Pattern ------ */
		Phone p = new PhoneBuilder().setOs("Android").setRam(2).getPhone();
		System.out.println(p);

	}

}
