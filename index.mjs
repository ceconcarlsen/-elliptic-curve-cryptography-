import elliptic from 'js-crypto-ec'; 

const msg = ["o", "l", "a"] // Uint8Array

async function generateKeys() {
  return elliptic.generateKey('P-256').then((key) => {
    const publicKey = key.publicKey;
    const privateKey = key.privateKey;

    return {publicKey, privateKey}
  })
}

elliptic.generateKey('P-256').then((key) => {
  const publicKey = key.publicKey;
  const privateKey = key.privateKey;

  console.log(publicKey);
  console.log(privateKey);

  // sign
  elliptic.sign(
    msg,
    privateKey,
    'SHA-256',
    'raw' // output signature is not formatted. DER-encoded signature is available with 'der'.
  ).then((signature) => {
    console.log("signature", signature);
    // now you get the signature in Uint8Array
    return elliptic.verify(
      msg,
      signature,
      publicKey,
      'SHA-256',
      'raw' // input signature is not formatted. DER-encoded signature is available with 'der'.
    );
  }).then((valid) => {
    // o resultado é true se a assinatura for válida
    console.log("valid", valid);
  });
})

const JWK_A = await generateKeys();
const JWK_B = await generateKeys();

// Lado A
const sharedAtPlayerA = elliptic.deriveSecret(JWK_B.publicKey, JWK_A.privateKey).then( (secretAtA) => {
  // now you get the shared secret from my (player A's) private key and player B's public key
  console.log({secretAtA});
})

// Lado B
const sharedAtPlayerB = elliptic.deriveSecret(JWK_A.publicKey, JWK_B.privateKey).then( (secretAtB) => {
  // now you get the shared secret from my (player B's) private key and player A's public key
  console.log({secretAtB});
})
