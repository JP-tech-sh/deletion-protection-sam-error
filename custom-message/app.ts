// Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import {CustomMessageTriggerHandler, CustomMessageTriggerEvent} from 'aws-lambda'

export const lambdaHandler: CustomMessageTriggerHandler = async (event: CustomMessageTriggerEvent) => {
  if (event.triggerSource === "CustomMessage_AdminCreateUser") {
    const message = `Welcome to the service. Your user name is ${event.request.usernameParameter}. Your temporary password is ${event.request.codeParameter}`;
    event.response.smsMessage = message;
    event.response.emailMessage = message;
    event.response.emailSubject = "Welcome to the service";
    //TODO: generate code, create url with code as parameter to auto sign in the user
  }
  return event
}
