package com.des.main;

import java.util.ArrayList;
import java.util.List;

import com.des.phone.Communication;
import com.des.phone.CommunicationFactory;
import com.des.phone.Employee;

public class FactoryMain {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		List<Employee> empList = createEmployeeList();
		CommunicationFactory cf = new CommunicationFactory();
		Communication processor;
		for (Employee emp : empList) {
			processor = cf.getProcess(emp.getModeOfContact());
			processor.process(emp);
		}
		System.out.println();
		System.out.println("====== Using Java 8 forEach ======");
		empList.forEach(emp -> {
			cf.getProcess(emp.getModeOfContact()).process(emp);
		});

	}

	private static List<Employee> createEmployeeList() {
		// TODO Auto-generated method stub
		List<Employee> empList = new ArrayList<>();
		Employee e1 = new Employee("Angel Priya", "1", "Pune", 23, "email", "angelpriya@gmail.com", "1000");
		Employee e2 = new Employee("Thakur", "1", "Pune", 23, "mobile", "thakur@gmail.com", "7854120302");
		Employee e3 = new Employee("Papa ki pari", "1", "Pune", 23, "email", "papakipari@gmail.com", "7854120302");
		Employee e4 = new Employee("Gabbar Singh", "1", "Pune", 23, "mobile", "gabbar@gmail.com", "50000");
		Employee e5 = new Employee("Ramu Kaka", "1", "Pune", 23, "email", "ramukaka@gmail.com", "7854120302");
		empList.add(e1);
		empList.add(e2);
		empList.add(e3);
		empList.add(e4);
		empList.add(e5);
		return empList;
	}

}
