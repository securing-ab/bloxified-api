  path = require('path'),
  ytdl = require('ytdl-core'),
  ffmpeg = require('fluent-ffmpeg'),
  sanitize = require('sanitize-filename'),
  mime = require('mime'),
  streamBuffers = require('stream-buffers');


function convert(url, cb) {
    console.log('convert!')
    let ffStream, filename, ytStream, ff;
  
    ytdl.getInfo(url)
      .then((info) => {
        //console.log(info)
        const title = info.videoDetails.title || '_TEMP';
        filename = path.join(sanitize(title) + '.mp3').replace('’','');
        console.log(filename)
        ytStream = ytdl(url);
        ffStream = ffmpeg(ytStream)
          .on('error', (err) => {
            console.log('An error occurred: ' + process.cwd() + ' ' + err.message);
          })
          .noVideo()
          .audioChannels(2)
          .audioBitrate('128k')
          .audioCodec('libmp3lame')
          .format('mp3')
        ;
  
        ff = ffStream.pipe();
  
        ff.on('data', function(chunk) {
          myReadableStreamBuffer.put(chunk);
        })
          .on('end', () => {
            myReadableStreamBuffer.stop();
            cb(filename);
          });
      })
      .catch((err) => {
        console.error(err)
      })
}