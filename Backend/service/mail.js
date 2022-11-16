const Sib = require('sib-api-v3-sdk');
const client = Sib.ApiClient.instance;
let environment = process.env;

const apiKey = client.authentications['api-key']
apiKey.apiKey = process.env.API_KEY

class Mail {
	static async sendVerifyEmail(namee, emaill, token) {
		const tranEmailApi = new Sib.TransactionalEmailsApi()
        const sender = {
            email: 'Truends@gmail.com',
            name: 'Truends',
        }
        const receivers = [
            {
                email: emaill,
            },
        ]
        let info = await tranEmailApi.sendTransacEmail({
            sender,
            to: receivers,
            subject: 'Verify Your Email',
            textContent: `
                Hai  ${namee} 
                Terima kasih telah mendaftar di Truends
                Kamu dapat melakukan verifikasi email melalui link dibawah ini
                
                ${environment.BASE_URL}/auth/email/verify?email=${emaill}&token=${token}`,
            // htmlContent: constant.email.VERIFY(`${environment.BASE_URL}/auth/email/verify?email=${emaill}&token=${token}`, namee),
        }, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log("email is send");
                console.log(info);
            }
        });
	}

	static async notification(namee, emaill, fitur, namee2) {
		const tranEmailApi = new Sib.TransactionalEmailsApi()
        const sender = {
            email: 'Truends@gmail.com',
            name: 'Pesta Sains Nasional 2022',
        }
        const receivers = [
            {
                email: emaill,
            },
        ]
        let info = await tranEmailApi.sendTransacEmail({
            sender,
            to: receivers,
            subject: `notification : ${fitur} oleh ${namee}`,
            textContent: `
                Hai  ${namee2} 
                ${namee} telah mengajukan ${fitur} nih di Truends, harap dicek secapatnya ya!`,
        }, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log("email is send");
                console.log(info);
            }
        });
	}
}

module.exports = Mail;