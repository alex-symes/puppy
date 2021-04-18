def on_button_pressed_a():
    for index in range(10):
        basic.show_leds("""
            . # . . .
            # # . . .
            # # . . #
            . # # # .
            # . . . #
            """)
        basic.show_leds("""
            . # . . .
            # # . . .
            # # . . #
            . # # # .
            . # . # .
            """)
    basic.show_leds("""
        . # . . .
        # # . . .
        # # . . #
        . # # # .
        # . # . .
        """)
    basic.pause(100)
    basic.show_leds("""
        . # . . .
        # # . . .
        # # . . #
        . # # # .
        . # . # .
        """)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    for index2 in range(2):
        basic.show_leds("""
            . # . . .
            # # . . .
            # # . # .
            . # # # .
            . # . # .
            """)
        basic.show_leds("""
            . # . . .
            # # . . .
            # # . . #
            . # # # .
            . # . # .
            """)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_gesture_shake():
    for index3 in range(4):
        basic.show_leds("""
            . # . . .
            # # . . .
            . # . . #
            # # # # .
            . # . # .
            """)
        basic.show_leds("""
            . # . . .
            # # . . .
            # # . . #
            . # # # .
            . # . # .
            """)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_logo_pressed():
    images.create_big_image("""
        . . . . . . # # # .
        . # . . . . . . # .
        # # . . . . . # . .
        # # . . # . # . . .
        . # # # . . # # # .
        """).scroll_image(1, 200)
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

basic.show_leds("""
    . # . . .
    # # . . .
    # # . . #
    . # # # .
    . # . # .
    """)

def on_forever():
    pass
basic.forever(on_forever)
