/**
 * HelloWorldWSDDServiceLocator.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package localhost.testWeb.aservices.HelloWorldWSDD;

public class HelloWorldWSDDServiceLocator extends org.apache.axis.client.Service implements localhost.testWeb.aservices.HelloWorldWSDD.HelloWorldWSDDService {

    public HelloWorldWSDDServiceLocator() {
    }


    public HelloWorldWSDDServiceLocator(org.apache.axis.EngineConfiguration config) {
        super(config);
    }

    public HelloWorldWSDDServiceLocator(java.lang.String wsdlLoc, javax.xml.namespace.QName sName) throws javax.xml.rpc.ServiceException {
        super(wsdlLoc, sName);
    }

    // Use to get a proxy class for HelloWorldWSDD
    private java.lang.String HelloWorldWSDD_address = "http://localhost/testWeb/aservices/HelloWorldWSDD";

    public java.lang.String getHelloWorldWSDDAddress() {
        return HelloWorldWSDD_address;
    }

    // The WSDD service name defaults to the port name.
    private java.lang.String HelloWorldWSDDWSDDServiceName = "HelloWorldWSDD";

    public java.lang.String getHelloWorldWSDDWSDDServiceName() {
        return HelloWorldWSDDWSDDServiceName;
    }

    public void setHelloWorldWSDDWSDDServiceName(java.lang.String name) {
        HelloWorldWSDDWSDDServiceName = name;
    }

    public localhost.testWeb.aservices.HelloWorldWSDD.HelloWorldWSDD getHelloWorldWSDD() throws javax.xml.rpc.ServiceException {
       java.net.URL endpoint;
        try {
            endpoint = new java.net.URL(HelloWorldWSDD_address);
        }
        catch (java.net.MalformedURLException e) {
            throw new javax.xml.rpc.ServiceException(e);
        }
        return getHelloWorldWSDD(endpoint);
    }

    public localhost.testWeb.aservices.HelloWorldWSDD.HelloWorldWSDD getHelloWorldWSDD(java.net.URL portAddress) throws javax.xml.rpc.ServiceException {
        try {
            localhost.testWeb.aservices.HelloWorldWSDD.HelloWorldWSDDSoapBindingStub _stub = new localhost.testWeb.aservices.HelloWorldWSDD.HelloWorldWSDDSoapBindingStub(portAddress, this);
            _stub.setPortName(getHelloWorldWSDDWSDDServiceName());
            return _stub;
        }
        catch (org.apache.axis.AxisFault e) {
            return null;
        }
    }

    public void setHelloWorldWSDDEndpointAddress(java.lang.String address) {
        HelloWorldWSDD_address = address;
    }

    /**
     * For the given interface, get the stub implementation.
     * If this service has no port for the given interface,
     * then ServiceException is thrown.
     */
    public java.rmi.Remote getPort(Class serviceEndpointInterface) throws javax.xml.rpc.ServiceException {
        try {
            if (localhost.testWeb.aservices.HelloWorldWSDD.HelloWorldWSDD.class.isAssignableFrom(serviceEndpointInterface)) {
                localhost.testWeb.aservices.HelloWorldWSDD.HelloWorldWSDDSoapBindingStub _stub = new localhost.testWeb.aservices.HelloWorldWSDD.HelloWorldWSDDSoapBindingStub(new java.net.URL(HelloWorldWSDD_address), this);
                _stub.setPortName(getHelloWorldWSDDWSDDServiceName());
                return _stub;
            }
        }
        catch (java.lang.Throwable t) {
            throw new javax.xml.rpc.ServiceException(t);
        }
        throw new javax.xml.rpc.ServiceException("There is no stub implementation for the interface:  " + (serviceEndpointInterface == null ? "null" : serviceEndpointInterface.getName()));
    }

    /**
     * For the given interface, get the stub implementation.
     * If this service has no port for the given interface,
     * then ServiceException is thrown.
     */
    public java.rmi.Remote getPort(javax.xml.namespace.QName portName, Class serviceEndpointInterface) throws javax.xml.rpc.ServiceException {
        if (portName == null) {
            return getPort(serviceEndpointInterface);
        }
        java.lang.String inputPortName = portName.getLocalPart();
        if ("HelloWorldWSDD".equals(inputPortName)) {
            return getHelloWorldWSDD();
        }
        else  {
            java.rmi.Remote _stub = getPort(serviceEndpointInterface);
            ((org.apache.axis.client.Stub) _stub).setPortName(portName);
            return _stub;
        }
    }

    public javax.xml.namespace.QName getServiceName() {
        return new javax.xml.namespace.QName("http://localhost/testWeb/aservices/HelloWorldWSDD", "HelloWorldWSDDService");
    }

    private java.util.HashSet ports = null;

    public java.util.Iterator getPorts() {
        if (ports == null) {
            ports = new java.util.HashSet();
            ports.add(new javax.xml.namespace.QName("http://localhost/testWeb/aservices/HelloWorldWSDD", "HelloWorldWSDD"));
        }
        return ports.iterator();
    }

    /**
    * Set the endpoint address for the specified port name.
    */
    public void setEndpointAddress(java.lang.String portName, java.lang.String address) throws javax.xml.rpc.ServiceException {
        
if ("HelloWorldWSDD".equals(portName)) {
            setHelloWorldWSDDEndpointAddress(address);
        }
        else 
{ // Unknown Port Name
            throw new javax.xml.rpc.ServiceException(" Cannot set Endpoint Address for Unknown Port" + portName);
        }
    }

    /**
    * Set the endpoint address for the specified port name.
    */
    public void setEndpointAddress(javax.xml.namespace.QName portName, java.lang.String address) throws javax.xml.rpc.ServiceException {
        setEndpointAddress(portName.getLocalPart(), address);
    }

}
