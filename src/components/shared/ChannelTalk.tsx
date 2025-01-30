"use client"

export function ChannelTalk() {
  const CHANNEL_PLUGIN_KEY = process.env.NEXT_PUBLIC_CHANNEL_TALK_KEY

  if (!CHANNEL_PLUGIN_KEY) {
    console.error("Channel Talk Plugin Key is not defined")
    return null
  }

  if (typeof window !== "undefined") {
    ;(function () {
      var w = window as any
      if (w.ChannelIO) {
        return w.console.error("ChannelIO script included twice.")
      }
      var ch: any = function () {
        ch.c(arguments)
      }
      ch.q = []
      ch.c = function (args: any) {
        ch.q.push(args)
      }
      w.ChannelIO = ch
      function l() {
        if (w.ChannelIOInitialized) {
          return
        }
        w.ChannelIOInitialized = true
        var s = document.createElement("script")
        s.type = "text/javascript"
        s.async = true
        s.src = "https://cdn.channel.io/plugin/ch-plugin-web.js"
        var x = document.getElementsByTagName("script")[0]
        if (x.parentNode) {
          x.parentNode.insertBefore(s, x)
        }
      }
      if (document.readyState === "complete") {
        l()
      } else {
        w.addEventListener("DOMContentLoaded", l)
        w.addEventListener("load", l)
      }
    })()

    ;(window as any).ChannelIO("boot", {
      pluginKey: CHANNEL_PLUGIN_KEY,
    })
  }

  return null
} 