package com.des.phone;

public class EmailCommunication implements Communication {

	@Override
	public void process(Employee emp) {
		// TODO Auto-generated method stub
		System.out.println(emp.getName() + "Communicated via email : " + emp.getEmail());

	}

}
