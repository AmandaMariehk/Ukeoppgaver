package com.example.motorvogn3;

public class Registration {
    private String pNumber;
    private String name;
    private String address;
    private String characteristics;
    private String brand;
    private String type;

    public Registration (String pNumber, String name, String address, String characteristics, String brand, String type){
        this.pNumber = pNumber;
        this.name = name;
        this.address = address;
        this.characteristics = characteristics;
        this.brand = brand;
        this.type = type;
    }

    public Registration(){

    }

    public String getpNumber() {
        return pNumber;
    }

    public void setpNumber(String pNumber) {
        this.pNumber = pNumber;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCharacteristics() {
        return characteristics;
    }

    public void setCharacteristics(String characteristics) {
        this.characteristics = characteristics;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}
