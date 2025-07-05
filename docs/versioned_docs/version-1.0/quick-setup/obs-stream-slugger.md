---
id: obs-setup
title: OBS Setup
sidebar_position: 2
description: Learn how to configure OBS to work seamlessly with Stream Slugger.
---

# 🎥 OBS Setup – Stream Slugger

Setting up **OBS Studio** for Stream Slugger is quick and straightforward. On this page, we'll guide you through the basics to get started, including recommended settings and best practices.

> 📢 _Full video tutorial at the bottom of this page!_

---

## ✅ Prerequisites

Before proceeding, make sure you have:

- [OBS Studio](https://obsproject.com/) installed (version 29 or higher recommended)
- A stable internet connection
- Your Stream Slugger **stream key** or URL

---

## ⚙️ Recommended OBS Settings

Here are the optimal settings we suggest for compatibility with Stream Slugger:

### Output

- **Output Mode:** Advanced
- **Encoder:** x264 (or NVENC if supported)
- **Bitrate:** 4500 kbps (or higher for 1080p60)
- **Keyframe Interval:** 2
- **Preset:** veryfast (or lower if CPU allows)

### Video

- **Base Resolution:** 1920x1080
- **Output Resolution:** 1920x1080 or 1280x720
- **FPS:** 30 or 60

### Audio

- **Sample Rate:** 48kHz
- **Bitrate:** 160kbps or higher for the stream audio track

---

## 🔗 Connect OBS to Stream Slugger

1. Go to `Settings > Stream`.
2. Choose **Custom** as the service.
3. Enter your Stream Slugger **server URL** and **stream key**.
4. Click **Start Streaming** when you're ready!

---

## 🎬 Video Tutorial

Want to follow along visually? Watch our setup tutorial below:

<div style={{ textAlign: 'center', margin: '2rem 0' }}>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/kqizkpBSF5E" 
    title="OBS Setup Tutorial" frameborder="0" allowfullscreen></iframe>
</div>

---

## 🙋 Need Help?

If you run into issues or have questions, reach out on [Discord](https://discord.gg/your-link) or check our [Troubleshooting Guide](./troubleshooting).

---

🚀 You're now ready to stream with Stream Slugger via OBS. Happy streaming!
