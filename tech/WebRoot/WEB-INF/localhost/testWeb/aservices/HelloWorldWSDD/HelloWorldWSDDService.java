/**
 * HelloWorldWSDDService.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package localhost.testWeb.aservices.HelloWorldWSDD;

public interface HelloWorldWSDDService extends javax.xml.rpc.Service {
    public java.lang.String getHelloWorldWSDDAddress();

    public localhost.testWeb.aservices.HelloWorldWSDD.HelloWorldWSDD getHelloWorldWSDD() throws javax.xml.rpc.ServiceException;

    public localhost.testWeb.aservices.HelloWorldWSDD.HelloWorldWSDD getHelloWorldWSDD(java.net.URL portAddress) throws javax.xml.rpc.ServiceException;
}
