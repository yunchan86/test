package com.framework.jbpm.chapter1;

import org.jbpm.api.ProcessDefinition;
import org.jbpm.api.ProcessInstance;
import org.jbpm.pvm.internal.builder.ProcessDefinitionBuilder;
import org.jbpm.pvm.internal.history.events.ProcessInstanceCreate;

public class TestHelloWorldProcess {
	public static void main(String[] args) {
		ProcessDefinition pd = ProcessDefinitionBuilder.startProcess().endProcess() ;
		//ProcessInstance pi =processI
	}
}
