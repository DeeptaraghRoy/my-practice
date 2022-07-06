package com.des.phone;

public class MobileCommunication implements Communication {

	@Override
	public void process(Employee emp) {
		// TODO Auto-generated method stub
		System.out.println(emp.getName() + "Communicated via mobile : " + emp.getPhoneNumber());

	}

}
