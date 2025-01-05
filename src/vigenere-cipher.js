const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    return this.process(message, key, 'encrypt');
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }

    return this.process(encryptedMessage, key, 'decrypt');
  }

  process(input, key, mode) {
    input = input.toUpperCase();
    key = key.toUpperCase();
    const result = [];
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let keyIndex = 0;

    for (let i = 0; i < input.length; i++) {
      const char = input[i];

      if (alphabet.includes(char)) {
        const charIndex = alphabet.indexOf(char);
        const keyChar = key[keyIndex % key.length];
        const keyIndexOffset = alphabet.indexOf(keyChar);

        let newIndex;
        if (mode === 'encrypt') {
          newIndex = (charIndex + keyIndexOffset) % alphabet.length;
        } else {
          newIndex = (charIndex - keyIndexOffset + alphabet.length) % alphabet.length;
        }

        result.push(alphabet[newIndex]);
        keyIndex++;
      } else {
        result.push(char);
      }
    }

    const output = result.join('');
    return this.isDirect ? output : output.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
