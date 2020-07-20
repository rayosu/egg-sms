'use strict'
const QcloudSms = require('qcloudsms_js');
const SMSClient = require('@alicloud/sms-sdk')

module.exports = {
    get qcSms()
    {
        const config = this.config.uniSms.qc;
        console.assert(config.accessKeyId && config.secretAccessKey,
            '[egg-sms] Must set `accessKeyId` and `secretAccessKey` in sms\'s config')
        return new QcloudSms(config.accessKeyId, config.secretAccessKey).SmsSingleSender();
    },
    get aliSms()
    {
        const config = this.config.uniSms.ali;
        console.assert(config.accessKeyId && config.secretAccessKey,
            '[egg-sms] Must set `accessKeyId` and `secretAccessKey` in sms\'s config')
        return new new SMSClient(config.accessKeyId, config.secretAccessKey);
    }
}
